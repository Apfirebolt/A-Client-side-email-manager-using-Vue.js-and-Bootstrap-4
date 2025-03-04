import { defineStore } from "pinia";
import { ref } from "vue";
import httpClient from "../plugins/interceptor";
import { useAuth } from "./auth";
import { useToast } from "vue-toastification";

const toast = useToast();
const auth = useAuth();

export const useEmailStore = defineStore("email", {
  state: () => ({
    email: ref({}),
    emails: ref([]),
    loading: ref(false),
  }),

  getters: {
    getEmail() {
      return this.email;
    },
    getEmails() {
      return this.emails;
    },
    isLoading() {
      return this.loading;
    },
  },

  actions: {
    async addEmail(emailData) {
      try {
        const headers = {
          Authorization: `Bearer ${auth.authData.token}`,
        };
        this.loading = true;
        const response = await httpClient.post("emails", emailData, {
          headers,
        });
        if (response.status === 201) {
          toast.success("Email added!");
        }
      } catch (error) {
        console.log(error);
        if (error.response.status === 400) {
          let message = "Bad request";
          if (error.response.data.message) {
            message = error.response.data.message;
          }
          toast.error(message);
        }
      } finally {
        this.loading = false;
      }
    },

    async getEmailAction(emailId) {
      try {
        const headers = {
          Authorization: `Bearer ${auth.authData.token}`,
        };
        const response = await httpClient.get("emails/" + emailId, {
          headers,
        });
        this.email = response.data;
      } catch (error) {
        console.log(error);
      }
    },

    async getEmailsAction(page = 1) {
      try {
        const headers = {
          Authorization: `Bearer ${auth.authData.token}`,
        };
        this.loading = true;
        const response = await httpClient.get("emails?page=" + page, {
          headers,
        });
        this.emails = response.data;
      } catch (error) {
        console.log(error);
        return error;
      } finally {
        this.loading = false;
      }
    },

    async deleteEmail(emailId) {
      try {
        const headers = {
          Authorization: `Bearer ${auth.authData.token}`,
        };
        this.loading = true;
        const response = await httpClient.delete("emails/" + emailId, {
          headers,
        });
        if (response.status === 200) {
          toast.success("Email deleted!");
        }
      } catch (error) {
        console.log(error);
        return error;
      } finally {
        this.loading = false;
      }
    },

    async markEmailAsRead(emailItem) {
      try {
        const headers = {
          Authorization: `Bearer ${auth.authData.token}`,
        };
        const response = await httpClient.patch(
          "emails/" + emailItem._id + "/read",
          null,
          {
            headers,
          }
        );
        this.email = response.data;
      } catch (error) {
        console.log(error);
      }
    },

    resetEmailData() {
      this.email = {};
      this.emails = [];
    },
  },
});
