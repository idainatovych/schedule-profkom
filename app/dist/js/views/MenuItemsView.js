define(["jquery","underscore","backbone","../models/MenuItemModel"],function(e,t,i,n){var l=i.View.extend({model:new n,initialize:function(){this.template=t.template("#menuItem"),this.listenTo(this.model,"change",this.render)},events:{"click li":"clickItem"},clickItem:function(){console.log("Clicked")},render:function(){return this.$el.html(this.template(this.model.toJSON())),this}});return l});