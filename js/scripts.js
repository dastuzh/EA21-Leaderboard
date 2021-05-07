/*!
 * Start Bootstrap - Bare v4.3.0 (https://startbootstrap.com/template/bare)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

const students=[
    {
        "repository": "EA21-17",
        "preprocessing time (ms)": "439594",
        "execution time (ms)": "304076",
        "submission time": "07/05/2021 09:43:00",
        "update time": "07/05/2021 16:06:16",
        "timestamp": "1620396376"
    },
    {
        "repository": "EA21-test",
        "preprocessing time (ms)": "340165",
        "execution time (ms)": "272930",
        "submission time": "07/05/2021 14:16:26",
        "update time": "07/05/2021 16:17:11",
        "timestamp": "1620397031"
    }
]
        
        const last_update_time=07/05/2021 16:23:21
        

var app = new Vue({
    el: '#app',
    data: {
        students,
        last_update_time
    },
    computed: {
        formatted_students: function() {
            return this.students.sort((a,b) => {
                return a.execution_time - b.execution_time
            }).map(s => {
                return {
                    ...s,
                    ['preprocessing time (ms)']: this.numberWithCommas(s['preprocessing time (ms)']),
                    ['execution time (ms)']: this.numberWithCommas(s['execution time (ms)']),
                }
            })
        }
    },
    methods: {
        numberWithCommas: function (x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
})
