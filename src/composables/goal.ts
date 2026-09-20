  import { ref } from 'vue'
  import { reactive } from "vue";

  export const createGoalCard = ref(false)

  export const selectIconCard = ref(false)

  export const goalForm = reactive({
    name: "",
    description: "",
    hours: null as number | null,
    minutes: null as number | null,
    icon: "tabler:book",
    color: "#3b82f6",
  });