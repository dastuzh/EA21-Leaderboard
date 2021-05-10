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
        },
        snap_overall_students: function() {
            const self = this
            return this.students.map(s => {
                return {
                    ...s,
                    ['triangle-full']: self.snap_datasets.map(d => parseInt(s[d+"-"+'triangle-full'])).reduce((a,b) => a+b,0),
                    ['triangle-count']: self.snap_datasets.map(d => parseInt(s[d+"-"+'triangle-count'])).reduce((a,b) => a+b,0),
                    ['1-path-full']: self.snap_datasets.map(d => parseInt(s[d+"-"+'1-path-full'])).reduce((a,b) => a+b,0),
                    ['1-path-count']: self.snap_datasets.map(d => parseInt(s[d+"-"+'1-path-count'])).reduce((a,b) => a+b,0),
                    ['2-path-full']: self.snap_datasets.map(d => parseInt(s[d+"-"+'2-path-full'])).reduce((a,b) => a+b,0),
                    ['2-path-count']: self.snap_datasets.map(d => parseInt(s[d+"-"+'2-path-count'])).reduce((a,b) => a+b,0),
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
