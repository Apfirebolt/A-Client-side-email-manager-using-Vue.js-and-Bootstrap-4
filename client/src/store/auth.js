import { defineStore } from "pinia";
import { ref } from "vue";
import Cookie from "js-cookie";
import router from "../routes";
import httpClient from "../plugins/interceptor";
import { useToast } from "vue-toastification";

const toast = useToast();

export const useAuth = defineStore("auth", {
  state: () => ({
    authData: Cookie.get("user") ? JSON.parse(Cookie.get("user")) : null,
    loading: ref(false),
  }),

  getters: {
    getAuthData() {
      return this.authData;
    },
    isLoading() {
      return this.loading;
    },
  },

  actions: {
    async loginAction(loginData) {
      try {
        const response = await httpClient.post("users/auth", loginData);
        if (response.data) {
          this.authData = response.data;
          toast.success("Login successful!");
          // set the data in cookie
          Cookie.set("user", JSON.stringify(response.data), { expires: 30 });
          router.push("/dashboard");
        }
      } catch (error) {
        let message = "An error occurred!";
        if (error.response && error.response.data) {
          message = error.response.data.message;
        }
        toast.error(message);
        console.log('Some error', error);
        return error;
      }
    },

    async registerAction(registerData) {
      try {
        const response = await httpClient.post("users", registerData);
        if (response.data && response.status === 201) {
          this.authData = response.data;
          toast.success("Registration successful!");
          Cookie.set("user", JSON.stringify(response.data), { expires: 30 });
          router.push("/dashboard");
        }
      } catch (error) {
        let message = "An error occurred!";
        if (error.response && error.response.data) {
          message = error.response.data.message;
        }
        toast.error(message);
        console.log(error);
        return error;
      }
    },

    async getProfileData() {
      try {
        // get the token from the cookie
        const authData = Cookie.get("user");
        const headers = {
          Authorization: `Bearer ${JSON.parse(authData).token}`,
        };
        const response = await httpClient.get("users/profile", { headers });
        console.log(response.data);
      } catch (error) {
        console.log(error);
        return error;
      }
    },

    logout() {
      this.authData = null;
      Cookie.remove("user");
      router.push("/login");
      toast.success("Logout successful!");
    },

    resetAuth() {
      this.authData = {};
    },
  },
});
