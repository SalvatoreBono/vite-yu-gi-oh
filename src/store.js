import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
    card: [],
    archetype: [],
    loading: false,
});

export function ExportApi(archetype) {
    store.loading = true;
    /* creo una costante url con undefined */
    let url = undefined;
    /* se archeype è uguale a undefined do come url https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0  */
    if (archetype === undefined) {
        url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0"
    } else {
        /* altrimenti do come url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${archetype}&num=20&offset=0` */
        url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${archetype}&num=20&offset=0`
    }
    axios.get(url).then((response) => {
        store.card = response.data.data;
        store.loading = false;
    })

}
export function ExportApiArchetype() {
    axios.get("https://db.ygoprodeck.com/api/v7/archetypes.php").then((response) => {
        store.archetype = response.data;
    })
}