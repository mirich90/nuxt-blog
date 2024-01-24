import axios from "axios";
import Cookie from "js-cookie";

export const state = () => ({
  postsLoaded: [],
  token: null,
  commentsLoaded: [],
});

export const mutations = {
  setPosts(state, posts) {
    state.postsLoaded = posts;
  },
  setComments(state, comments) {
    state.commentsLoaded = comments;
  },
  addPost(state, post) {
    console.log(post);
    state.postsLoaded.push(post);
  },
  editPost(state, postEdit) {
    const id = state.postsLoaded.findIndex((post) => post.id == postEdit.id);
    state.postsLoaded[id] = postEdit;
  },
  addComment(state, comment) {
    console.log(comment);
    state.commentsLoaded.push(comment);
  },
  deleteComment(state, id) {
    const index = state.commentsLoaded.findIndex((comment) => comment.id == id);
    state.commentsLoaded.splice(index, 1);
    console.log(state.commentsLoaded);
  },
  setToken(state, token) {
    state.token = token;
  },
  destroyToken(state) {
    state.token = null;
  },
};

export const actions = {
  nuxtServerInit({ commit }, contex) {
    return axios
      .get("http://testapi/?select=articles")
      .then((res) => {
        commit("setPosts", res.data);
      })
      .catch((e) => console.log(e));
  },

  authUser({ commit }, user) {
    const options = {
      method: "POST",
      headers: { "content-type": "multipart/form-data" },
      data: user,
      url: "http://testapi/?signup=1",
    };
    return axios(options)
      .then((res) => {
        if (res.data.status === 500) {
          return res.data;
        }
        const token = res.data.token;
        console.log(res);
        commit("setToken", token);
        localStorage.setItem("token", token);
        Cookie.set("jwt", token);
        return res.data;
      })
      .catch((e) => console.log(e));
  },
  loginUser({ commit }, user) {
    const options = {
      method: "POST",
      headers: { "content-type": "multipart/form-data" },
      data: user,
      url: "http://testapi/?login=1",
    };
    return axios(options)
      .then((res) => {
        if (res.data.status === 500) {
          return res.data;
        }
        const token = res.data.token;
        console.log(res);
        commit("setToken", token);
        localStorage.setItem("token", token);
        Cookie.set("jwt", token);
        return res.data;
      })
      .catch((e) => console.log(e));
  },

  initAuth({ commit }, req) {
    let token;
    if (req) {
      if (!req.headers.cookie) return false;
      const jwtCookie = req.headers.cookie
        .split(";")
        .find((t) => t.trim().startsWith("jwt="));
      if (!jwtCookie) return false;
      token = jwtCookie.split("=")[1];
    } else {
      token = localStorage.getItem("token");
      if (!token) return false;
    }
    commit("setToken", token);
  },

  logout({ commit }) {
    commit("destroyToken");
    localStorage.removeItem("token");
    Cookie.remove("jwt");
  },

  addPost({ commit }, post) {
    const options = {
      method: "POST",
      headers: { "content-type": "multipart/form-data" },
      data: post,
      url: "http://testapi/?save=articles",
    };

    return axios(options)
      .then((res) => {
        commit("addPost", { ...post, id: +res.data });
      })
      .catch((e) => console.log(e));
  },

  editPost({ commit }, post) {
    const options = {
      method: "POST",
      headers: { "content-type": "multipart/form-data" },
      data: post,
      url: `http://testapi/?put=articles&id=${post.id}`,
    };

    return axios(options)
      .then((res) => {
        commit("editPost", post);
      })
      .catch((e) => console.log(e));
  },
  addComment({ commit }, comment) {
    const options = {
      method: "POST",
      headers: { "content-type": "multipart/form-data" },
      data: comment,
      url: `http://testapi/?save=comments`,
    };

    console.log(comment);
    return axios(options)
      .then((res) => {
        console.log(res.data);
        commit("addComment", { ...comment, id: +res.data });
      })
      .catch((e) => console.log(e));
  },
  changeStatusComment({ commit }, comment) {
    const options = {
      method: "POST",
      headers: { "content-type": "multipart/form-data" },
      data: comment,
      url: `http://testapi/?put=comments&id=${comment.id}`,
    };

    return axios(options)
      .then((res) => {
        // console.log(res);
        // commit("changeStatusComment", res);
      })
      .catch((e) => console.log(e));
  },
  setComments(contex) {
    return axios
      .get(`http://testapi/?select=comments`)
      .then((res) => {
        let comments = res.data;
        contex.commit("setComments", [...comments]);
        return { comments: [...JSON.parse(JSON.stringify(comments))] };
      })
      .catch((e) => console.log(e));
  },
  deleteComment({ commit }, comment) {
    const options = {
      method: "POST",
      headers: { "content-type": "multipart/form-data" },
      data: comment,
      url: `http://testapi/?delete=comments&id=${comment.id}`,
    };

    return axios(options)
      .then((res) => {
        console.log(res);
        commit("deleteComment", comment.id);
      })
      .catch((e) => console.log(e));
  },
};

export const getters = {
  getPostsLoaded(state) {
    return state.postsLoaded;
  },
  getCommentsLoaded(state) {
    return state.commentsLoaded;
  },
  checkAuthUser(state) {
    return state.token != null;
  },
};
