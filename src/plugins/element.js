import Vue from 'vue'
import {
    Button, Card, Message, MessageBox,
     Image, Carousel, CarouselItem, Tabs, TabPane,
    Rate, Form, FormItem, Input, Radio, RadioGroup,
    Select, Option, CheckboxGroup, Checkbox,Upload,
    Dialog
} from 'element-ui'
// import { Form, FormItem } from 'element-ui'
// import { Input } from 'element-ui'

Vue.use(Button)
Vue.use(Image)
Vue.use(Card)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Rate)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Select)
Vue.use(Option)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Upload)
Vue.use(Dialog)


Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm