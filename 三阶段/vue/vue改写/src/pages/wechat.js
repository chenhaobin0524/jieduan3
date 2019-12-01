import Vue from 'vue/dist/vue';
import Header from '../model/header';
import Search from '../model/search';
import Panel from '../model/panel';
export default Vue.extend({
    template: `
    <div>
    <Header color="green">微信</Header>
    <Search/>
    <Panel/>
    </div>
    `,
    components: {
        Header,
        Search,
        Panel
    }
})