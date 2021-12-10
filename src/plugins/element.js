import Vue from 'vue'
import {
    Button, Card, Message, MessageBox,
     Image, Carousel, CarouselItem, Tabs, TabPane
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

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm