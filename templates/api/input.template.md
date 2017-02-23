{% import "lib/macros.md" as lib -%}
{% extends "api/directive.template.md" %}

{% block usage %}
## Usage
```
<input type="{$ doc.inputType $}"
  {%- for param in doc.params %}
       {$ lib.directiveParam(param.alias or param.name, param.type, '="', '"') $}
  {%- endfor %}>
```
{% endblock %}
