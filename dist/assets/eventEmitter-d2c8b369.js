const e={events:{},on:function(t,s){this.events[t]||(this.events[t]=[]),this.events[t].push(s)},emit:function(t,...s){this.events[t]&&this.events[t].forEach(i=>i(...s))},off:function(t,s){this.events[t]&&(this.events[t]=this.events[t].filter(i=>i!==s))}};export{e};