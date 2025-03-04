import { defineStore } from "pinia";
import { ref } from "vue";
import httpClient from "../plugins/interceptor";
import { useAuth } from "./auth";
import { useToast } from "vue-toastification";
import emitter from '../plugins/eventBus';

const toast = useToast();
const auth = useAuth();

export const useEmailStore = defineStore("email", {
  state: () => ({
    email: ref({}),
    emails: ref([]),
    users: ref([]),
    loading: ref(false),
  }),

  getters: {
    getEmail() {
      return this.email;
    },
    getEmails() {
      return this.emails;
    },
    getUsers() {
      return this.users;
    },
    isLoading() {
      return this.loading;
    },
  },

  actions: {
    async sendEmail(emailData) {
      try {
        const headers = {
          Authorization: `Bearer ${auth.authData.token}`,
        };
        this.loading = true;
        const response = await httpClient.post("emails", emailData, {
          headers,
        });
        if (response.status === 201) {
          toast.success('Email sent!');
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

    async updateEmail(emailItem, action) {
      try {
        const headers = {
          Authorization: `Bearer ${auth.authData.token}`,
        };
        console.log('emailItem', emailItem);
        if (action === 'important') {
          emailItem.isImportant = !emailItem.isImportant;
        }
        if (action === 'trash') {
          emailItem.isDeleted = !emailItem.isTrash;
        }
        if (action === 'read') {
          emailItem.isRead = !emailItem.isRead;
        }
        const response = await httpClient.patch(
          "emails/" + emailItem._id,
          emailItem,
          {
            headers,
          }
        );
        this.email = response.data;
      } catch (error) {
        console.log(error);
      }
    },

    async getUsersAction() {
      try {
        const headers = {
          Authorization: `Bearer ${auth.authData.token}`,
        };
        const response = await httpClient.get("users", {
          headers,
        });
        this.users = response.data;
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
