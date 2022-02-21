/*!
 * Start Bootstrap - Bare v4.3.0 (https://startbootstrap.com/template/bare)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

Vue.filter("formatNumber", function (value) {
    if (value == "N/A") {
        return "N/A"
    } else if (Number.isNaN(parseInt(value))) {
        return "X"
    }

    return numeral(value).format("0,0"); // displaying other groupings/separators is possible, look at the docs
    // return value
  });

var app = new Vue({
    el: '#app',
    data: {
        students: [
            ...students,
        ],
        last_update_time,
        snap_queries: ["triangle-full", "triangle-count", "1-path-full", "1-path-count", "2-path-full", "2-path-count"],
        snap_datasets: ["facebook", "twitter", "wiki", "enron"],
        cyclic_queries: ["facebook-triangle-full", "facebook-triangle-count", "twitter-triangle-full", "twitter-triangle-count", "wiki-triangle-full", "wiki-triangle-count", "enron-triangle-full", "enron-triangle-count", ],
        snap_acyclic_queries: ["facebook-1-path-full","facebook-1-path-count","facebook-2-path-full","facebook-2-path-count","twitter-1-path-full","twitter-1-path-count","twitter-2-path-full","twitter-2-path-count","wiki-1-path-full","wiki-1-path-count","wiki-2-path-full","wiki-2-path-count","enron-1-path-full","enron-1-path-count","enron-2-path-full","enron-2-path-count",],
        snap_all_queries: ["facebook-1-path-full","facebook-1-path-count","facebook-2-path-full","facebook-2-path-count","twitter-1-path-full","twitter-1-path-count","twitter-2-path-full","twitter-2-path-count","wiki-1-path-full","wiki-1-path-count","wiki-2-path-full","wiki-2-path-count","enron-1-path-full","enron-1-path-count","enron-2-path-full","enron-2-path-count","facebook-triangle-full", "facebook-triangle-count", "twitter-triangle-full", "twitter-triangle-count", "wiki-triangle-full", "wiki-triangle-count", "enron-triangle-full", "enron-triangle-count",],
        imdb_acyclic_queries: ['query1', 'query2', 'query3', 'query4', 'query5']
    },
    computed: {
        formatted_students: function() {
            const result = this.students.map(s => {
                if (s.repository.startsWith("Postgres")) {
                    return {
                        ...s,
                        ['preprocessing time (ms)']: "N/A",
                        ['execution time (ms)']: this.numberWithCommas(s['execution time (ms)']),
                        cyclic_execution: this.cyclic_queries.map(q => s[q]).reduce((a,b) => parseInt(a) + parseInt(b), 0),
                        snap_acyclic_execution: this.snap_acyclic_queries.map(q => s[q]).reduce((a,b) => parseInt(a) + parseInt(b), 0),
                        imdb_acyclic_execution: this.imdb_acyclic_queries.map(q => s[q]).reduce((a,b) => parseInt(a) + parseInt(b), 0),
                        snap_execution: this.snap_all_queries.map(q => s[q]).reduce((a,b) => parseInt(a) + parseInt(b), 0),
                    }
                } else 
                return {
                    ...s,
                    ['preprocessing time (ms)']: this.numberWithCommas(s['preprocessing time (ms)']),
                    ['execution time (ms)']: this.numberWithCommas(this.numberWithCommas(s['execution time (ms)'])),
                    cyclic_execution: this.cyclic_queries.map(q => s[q]).reduce((a,b) => parseInt(a) + parseInt(b), 0),
                        snap_acyclic_execution: this.snap_acyclic_queries.map(q => s[q]).reduce((a,b) => parseInt(a) + parseInt(b), 0),
                        imdb_acyclic_execution: this.imdb_acyclic_queries.map(q => s[q]).reduce((a,b) => parseInt(a) + parseInt(b), 0),
                        snap_execution: this.snap_all_queries.map(q => s[q]).reduce((a,b) => parseInt(a) + parseInt(b), 0),
                }
            }).sort((a,b) => {
                if (a.snap_timeout) {
                    return 1
                } else if (b.snap_timeout) {
                    return -1
                }
                return a.snap_execution - b.snap_execution 
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
            return x;
        }
    }
})
