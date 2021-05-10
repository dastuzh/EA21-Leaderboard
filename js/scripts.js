/*!
 * Start Bootstrap - Bare v4.3.0 (https://startbootstrap.com/template/bare)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

var app = new Vue({
    el: '#app',
    data: {
        students,
        last_update_time,
        snap_queries: ["triangle-full", "triangle-count", "1-path-full", "1-path-count", "2-path-full", "2-path-count"],
        snap_datasets: ["facebook", "twitter", "wiki", "enron"],
    },
    computed: {
        formatted_students: function() {
            const result = this.students.sort((a,b) => {
                return a['execution time (ms)'] - b['execution time (ms)']
            }).map(s => {
                if (s.repository == "Postgres") {
                    return {
                        ...s,
                        ['preprocessing time (ms)']: "N/A",
                        ['execution time (ms)']: this.numberWithCommas(s['execution time (ms)']),
                    }
                } else 
                return {
                    ...s,
                    ['preprocessing time (ms)']: this.numberWithCommas(s['preprocessing time (ms)']),
                    ['execution time (ms)']: this.numberWithCommas(s['execution time (ms)']),
                }
            })

            return result
        }
    },
    methods: {
        numberWithCommas: function (x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
})
