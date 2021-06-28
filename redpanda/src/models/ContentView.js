import Shipyard from "../components/Shipyard";
import Fleet from "../components/Fleet";
import Map from "../components/Map";
import Factory from "../components/Factory";

class ContentView {
    constructor() {
        this.views = {
            "Shipyard": Shipyard,
            "Factory": Factory,
            "Fleet": Fleet,
            "Map": Map
        };
    }

    getViewClasses() {
        return Object.values(this.views);
    }

    getNames() {
        return Object.keys(this.views);
    }

    getDefaultName() {
        return "Map";
    }

    getViewFromString(viewName) {
        return this.views[viewName];
    }
}

const CV = new ContentView();

export default CV;