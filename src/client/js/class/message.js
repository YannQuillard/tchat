import $ from 'jquery'

export default class Message {
    constructor () {
        this.initEls()
        this.initEvents()
    }

    initEls () {
        this.$els = {
            sendBtn: $('#send'),
            messages: $('#messages'),
            messageBox: $('#inputmessage')
        };
        // this.host = location.origin.replace(/^http/, 'ws')
        this.host = 'ws://localhost:3000'
        this.client = new WebSocket(this.host)
    }

    initEvents () {
        this.client.onopen = () => {
            console.log('Connection opened!')
        }
        this.client.onmessage = ({ data }) => this.showMessage(data);
        this.client.onclose = () => {
            this.client = null;
        }
        this.$els.sendBtn.click( () => {
            if (!this.client) {
                console.log("No WebSocket connection :(")
            }
            this.client.send(this.$els.messageBox[0].value)
            this.showMessage(this.$els.messageBox[0].value)
        })
    }

    showMessage(message) {
        // console.log(message)
        this.$els.messages.append(`\n\n${message}`)
        this.$els.messages.scrollTop = this.$els.messages.scrollHeight
        this.$els.messageBox[0].value = ''
    }
}