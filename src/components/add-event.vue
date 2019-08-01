<script>

export default {
    data() {
        return {
            evtName: "",
            evtArr: [],
            evtHandlerList: []
        };
    },
    methods: {
        addEvent() {
            let evtnameArr = [],
                evtHandlerList = [];
            for(let prop in this.dataKey.events) {
                evtnameArr.push(prop);
                evtHandlerList.push(this.dataKey.events[prop]);
            }
            this.evtArr = evtnameArr;
            this.evtHandlerList = evtHandlerList;
            this.evtName = this.evtArr.join(";");
        }
    }
};
</script>
