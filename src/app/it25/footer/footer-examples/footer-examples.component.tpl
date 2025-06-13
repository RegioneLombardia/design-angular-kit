{% from "../../../macro.template.njk" import sanitize as sanitize %}


{% set simpleHtml %}
  {% include "../footer-minimo-example/footer-minimo-example.component.html" %}
{% endset %}

{% set simpleTs %}
  {% include "../footer-minimo-example/footer-minimo-example.component.ts" %}
{% endset %}

<it-footer-minimo-example></it-footer-minimo-example>

<it-source-display html="{$ sanitize(simpleHtml) $}" typescript="{$ sanitize(simpleTs) $}"></it-source-display>


{% set simpleHtml %}
  {% include "../footer-standard-example/footer-standard-example.component.html" %}
{% endset %}

{% set simpleTs %}
  {% include "../footer-standard-example/footer-standard-example.component.ts" %}
{% endset %}

<it-footer-standard-example></it-footer-standard-example>

<it-source-display html="{$ sanitize(simpleHtml) $}" typescript="{$ sanitize(simpleTs) $}"></it-source-display>


{% set simpleHtml %}
  {% include "../footer-multilogo-example/footer-multilogo-example.component.html" %}
{% endset %}

{% set simpleTs %}
  {% include "../footer-multilogo-example/footer-multilogo-example.component.ts" %}
{% endset %}

<it-footer-multilogo-example></it-footer-multilogo-example>

<it-source-display html="{$ sanitize(simpleHtml) $}" typescript="{$ sanitize(simpleTs) $}"></it-source-display>



{% set simpleHtml %}
  {% include "../footer-multilink-example/footer-multilink-example.component.html" %}
{% endset %}

{% set simpleTs %}
  {% include "../footer-multilink-example/footer-multilink-example.component.ts" %}
{% endset %}

<it-footer-multilink-example></it-footer-multilink-example>

<it-source-display html="{$ sanitize(simpleHtml) $}" typescript="{$ sanitize(simpleTs) $}"></it-source-display>

