import Vue from "vue";

import Btn from "@/components/UI/Controls/Button.vue";
import Inpt from "@/components/UI/Controls/Input.vue";
import Txt from "@/components/UI/Controls/TextArea.vue";
import Message from "@/components/UI/Message.vue";

import Intro from "~/components/UI/Intro.vue";
import PostsList from "~/components/Blog/PostsList.vue";

Vue.component("Btn", Btn);
Vue.component("Inpt", Inpt);
Vue.component("Txt", Txt);
Vue.component("Message", Message);
Vue.component("Intro", Intro);
Vue.component("PostsList", PostsList);
