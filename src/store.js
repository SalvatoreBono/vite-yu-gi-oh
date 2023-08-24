import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
    card: [],
})

axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0").then((response) => {
    store.card = response.data.data;
})