/**
 * @file mofron-comp-googlemap/index.js
 * @brief google map component for mofron
 * @license MIT
 */
const Loader = require("@googlemaps/js-api-loader");
const comutl = mofron.util.common;

module.exports = class extends mofron.class.Component{
    /**
     * initialize component
     * 
     * @param (mixed) apikey parameter
     *                dict: component config
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("GoogleMap");
            
            this.shortForm("apikey");
            
	    this.confmng().add("apikey", { type: "string" });
            this.confmng().add("center", { type: "object", init: { lat: 0, lng: 0 } });
	    this.confmng().add("zoom", { type: "number", init: 12 });
            this.confmng().add("map", { type: "object" });
            
	    if (0 < arguments.length) {
                this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize google map
     * 
     * @type private
     */
    afterRender () {
        try {
	    let loader = new Loader.Loader({
	        apiKey: this.confmng("apikey"),
                version: "weekly",
            });
            
	    let mapcmp = this;
            loader.load().then(() => {
	        let map = new google.maps.Map(
		    document.getElementById(this.childDom().id()),
                    { center: mapcmp.center(), zoom: mapcmp.zoom() }
                );
                mapcmp.map(map);
	    });
	} catch (e) {
            console.error(e.stack); 
            throw e;
	}
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();
	    let map = new mofron.class.Dom({
	                  tag:"div", component: this,
			  style: { height: '100%' }
                      });
            this.childDom().child(map);
	    this.size("4rem","3rem");
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * google api key setter/getter
     *
     * @param (string) api key
     *                 undefined: call as getter
     * @return (string) api key
     * @type parameter
     */
    apikey (prm) {
        try {
            return this.confmng("apikey",prm);
	} catch (e) {
	    console.error(e.stack);
            throw e;
	}
    }
    
    /**
     * center position of google map
     * 
     * @param (dist) {lat: (float), lng: (float)}
     * @return (dist) center position
     * @type parameter
     */
    center (lat,lng) {
        try {
	    if (undefined === lat) {
                return this.confmng("center");
	    }
            this.confmng("center", { lat: lat, lng: lng });
	    if (null !== this.map()) {
	        this.map().setCenter(new google.maps.LatLng(lat,lng));
	    }
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
    
    /**
     * zoom config value
     * 
     * @param (number) zoom value
     * @return (number) zoom value
     * @type parameter
     */
    zoom (prm) {
        try {
            return this.confmng("zoom", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
    
    /**
     * get map object
     * 
     * @return (object) map object
     * @type function
     */
    map (prm) {
        try {
            return this.confmng("map",prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
