{% macro typeList(types) -%}
{% for typeName in types %}* {$ typeName $}{% endfor %}
{%- endmacro -%}

{%- macro directiveParam(name, type, join, sep) %}
  {%- if type.optional %}[{% endif -%}
  {$ name | dashCase $}{$ join $}{$ type.name $}{$ sep $}
  {%- if type.optional %}]{% endif -%}
{% endmacro -%}
