# mofron-comp-googlemap
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

google map component for mofron


# Install
```
npm install mofron mofron-comp-googlemap
```

# Sample
```html
<setting>
    <tag load="mofron-comp-dev">Map</tag>
</setting>

<script run=after>
map.map().addListener(
    'click',
    (e) => {
        console.log(e.latLng.lat() + "," + e.latLng.lng());
    }
);
</script>

<Map name=map size=(6rem,4rem)>35.68117118967436,139.76697678222706</Map>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| | center | dist | {lat: (float), lng: (float)} |
| | zoom | number | zoom value |
| | map | ||
