/**
 * Created by Dailer on 2017/7/11.
 */
Demo.TextValueCombo = BI.inherit(BI.Widget, {
    props: {
        baseCls: ""
    },
    render: function () {
        var combo, wrapper;
        return {
            type: "bi.button_group",
            items: [{
                type: "bi.text_value_combo",
                ref: function () {
                    combo = this;
                },
                text: "默认值",
                value: 22,
                width: 300,
                items: [{
                    text: "MVC-1",
                    iconCls: "date-font",
                    value: 1
                }, {
                    text: "MVC-2",
                    iconCls: "search-font",
                    value: 2
                }, {
                    text: "MVC-3",
                    iconCls: "pull-right-font",
                    value: 3
                }]
            }, {
                type: "bi.search_multi_text_value_combo",
                items: Demo.CONSTANTS.ITEMS,
                width: 200,
                value: {
                    type: 1,
                    value: ["1", "2", "3"]
                }
            }, {
                type: "bi.button",
                width: 90,
                height: 25,
                handler: function () {
                    wrapper.populate();
                }
            }, {
                type: 'bi.label',
                height: 1000
            }],
            ref: function () {
                wrapper = this;
            },
            layouts: [{
                type: "bi.vertical",
                vgap: 20
            }]
        };
    }
});

BI.shortcut("demo.text_value_combo", Demo.TextValueCombo);