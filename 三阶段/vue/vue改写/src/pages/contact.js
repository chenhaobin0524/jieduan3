import Vue from 'vue/dist/vue';
import Header from '../model/header';
export default Vue.extend({
    template: `
        <div>
            <Header color="red">通讯录</Header>
        </div>
    `,
    components: {
        Header,
    }
})