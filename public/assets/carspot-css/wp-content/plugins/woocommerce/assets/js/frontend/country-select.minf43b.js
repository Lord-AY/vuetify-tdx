jQuery(function(u) {
  if ("undefined" == typeof wc_country_select_params) return !1;
  if (u().selectWoo) {
    function t() {
      u("select.country_select:visible, select.state_select:visible").each(
        function() {
          var t = u.extend(
            {
              placeholder:
                u(this).attr("data-placeholder") ||
                u(this).attr("placeholder") ||
                "",
              width: "100%"
            },
            {
              language: {
                errorLoading: function() {
                  return wc_country_select_params.i18n_searching;
                },
                inputTooLong: function(t) {
                  var e = t.input.length - t.maximum;
                  return 1 == e
                    ? wc_country_select_params.i18n_input_too_long_1
                    : wc_country_select_params.i18n_input_too_long_n.replace(
                        "%qty%",
                        e
                      );
                },
                inputTooShort: function(t) {
                  var e = t.minimum - t.input.length;
                  return 1 == e
                    ? wc_country_select_params.i18n_input_too_short_1
                    : wc_country_select_params.i18n_input_too_short_n.replace(
                        "%qty%",
                        e
                      );
                },
                loadingMore: function() {
                  return wc_country_select_params.i18n_load_more;
                },
                maximumSelected: function(t) {
                  return 1 === t.maximum
                    ? wc_country_select_params.i18n_selection_too_long_1
                    : wc_country_select_params.i18n_selection_too_long_n.replace(
                        "%qty%",
                        t.maximum
                      );
                },
                noResults: function() {
                  return wc_country_select_params.i18n_no_matches;
                },
                searching: function() {
                  return wc_country_select_params.i18n_searching;
                }
              }
            }
          );
          u(this)
            .on("select2:select", function() {
              u(this).focus();
            })
            .selectWoo(t);
        }
      );
    }
    t(),
      u(document.body).bind("country_to_state_changed", function() {
        t();
      });
  }
  var e = wc_country_select_params.countries.replace(/&quot;/g, '"'),
    d = u.parseJSON(e),
    h =
      ".woocommerce-billing-fields,.woocommerce-shipping-fields,.woocommerce-address-fields,.woocommerce-shipping-calculator";
  u(document.body).on(
    "change refresh",
    "select.country_to_state, input.country_to_state",
    function() {
      var t = u(this).closest(h);
      t.length ||
        (t = u(this)
          .closest(".form-row")
          .parent());
      var e,
        n = u(this).val(),
        o = t.find("#billing_state, #shipping_state, #calc_shipping_state"),
        c = o.closest("p.form-row"),
        a = o.attr("name"),
        r = o.attr("id"),
        i = o.attr("data-input-classes"),
        s = o.val(),
        _ = o.attr("placeholder") || o.attr("data-placeholder") || "";
      if (d[n])
        if (u.isEmptyObject(d[n]))
          (e = u('<input type="hidden" />')
            .prop("id", r)
            .prop("name", a)
            .prop("placeholder", _)
            .attr("data-input-classes", i)
            .addClass("hidden " + i)),
            c
              .hide()
              .find(".select2-container")
              .remove(),
            o.replaceWith(e),
            u(document.body).trigger("country_to_state_changed", [n, t]);
        else {
          var l = d[n],
            p = u('<option value=""></option>').text(
              wc_country_select_params.i18n_select_state_text
            );
          _ || (_ = wc_country_select_params.i18n_select_state_text),
            c.show(),
            o.is("input") &&
              ((e = u("<select></select>")
                .prop("id", r)
                .prop("name", a)
                .data("placeholder", _)
                .attr("data-input-classes", i)
                .addClass("state_select " + i)),
              o.replaceWith(e),
              (o = t.find(
                "#billing_state, #shipping_state, #calc_shipping_state"
              ))),
            o.empty().append(p),
            u.each(l, function(t) {
              var e = u("<option></option>")
                .prop("value", t)
                .text(l[t]);
              o.append(e);
            }),
            o.val(s).change(),
            u(document.body).trigger("country_to_state_changed", [n, t]);
        }
      else
        o.is('select, input[type="hidden"]') &&
          ((e = u('<input type="text" />')
            .prop("id", r)
            .prop("name", a)
            .prop("placeholder", _)
            .attr("data-input-classes", i)
            .addClass("input-text  " + i)),
          c
            .show()
            .find(".select2-container")
            .remove(),
          o.replaceWith(e),
          u(document.body).trigger("country_to_state_changed", [n, t]));
      u(document.body).trigger("country_to_state_changing", [n, t]);
    }
  ),
    u(document.body).on("wc_address_i18n_ready", function() {
      u(h).each(function() {
        var t = u(this).find(
          "#billing_country, #shipping_country, #calc_shipping_country"
        );
        0 !== t.length && 0 !== t.val().length && t.trigger("refresh");
      });
    });
});
