import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
    card: [],
    archetype: [],
    loading: false,
    cardNumber: 0,
    archetypeTextSelected: "",
});

export function ExportApi() {
    store.loading = true;

    /* creo una costante url vuota */
    let url = "";
    /* se archeype è uguale a stringa vuota do come url https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0  */
    if (store.archetypeTextSelected === "") {
        url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0"


    } else {
        /* altrimenti do come url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${archetype}&num=20&offset=0` */
        url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${store.archetypeTextSelected}&num=20&offset=0`


    }
    axios.get(url).then((response) => {
        store.card = response.data.data;
        store.loading = false;
        store.cardNumber = store.card.length;
    })

}
export function ExportApiArchetype() {
    axios.get("https://db.ygoprodeck.com/api/v7/archetypes.php").then((response) => {
        store.archetype = response.data;
    })
}