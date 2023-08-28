import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
    card: [],
    archetype: [],
    loading: false,
    cardNumber: 0,
    archetypeTextSelected: "",
    url: {},
});

export function NextBtn() {
    const next = store.url.next_page;
    /* do ad ExportApi come argomento next che contiene  store.url.next_page (ovvero il link successivo) */
    ExportApi(next)
}
export function PrevBtn() {
    const prev = store.url.previous_page;
    /* do ad ExportApi come argomento next che contiene  store.url.previous_page (ovvero il link precedente) */
    ExportApi(prev)
}

export function ExportApi(url) {
    store.loading = true;

    /* creo una costante url vuota */
    let currentUrl = "";
    /* se archeype è uguale a stringa vuota do come url https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0  */
    if (store.archetypeTextSelected === "") {

        /* se url non esiste (è indefinito, stringa vuota o null) allora currentUrl = https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0 */
        /* se url esiste dico che currentUrl è uguale a l'argomento stesso*/
        currentUrl = url ? url : "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0";

    } else {

        /* altrimenti do come url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${archetype}&num=20&offset=0` */
        currentUrl = `https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${store.archetypeTextSelected}`


    }
    axios.get(currentUrl).then((response) => {
        store.card = response.data.data;
        store.url = response.data.meta;
        store.loading = false;
        store.cardNumber = store.card.length;
    })

}
export function ExportApiArchetype() {
    axios.get("https://db.ygoprodeck.com/api/v7/archetypes.php").then((response) => {
        store.archetype = response.data;
    })
}


