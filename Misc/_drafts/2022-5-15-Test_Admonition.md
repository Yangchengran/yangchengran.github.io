---
layout: note
title: Test admonitions
---

```summary*
Summary

summary
```
```scss
.admonition.summary {
  @include base_style(rgba(0, 176, 255, 1), $content: "\F071");
}
```

```note*
Note

note
```

```scss
.admonition.note {
  @include base_style(rgba(0, 176, 255, 1), $content: "\E06F");
}
```

```hint*
Hint

hint
```

```tip*
Tip

tip
```

```scss
.admonition.hint,
.admonition.tip {
  @include base_style(rgba(0, 191, 165, 1), $content: "\E80E");
}
```

```info*
Info

info
```
```scss
.admonition.info {
  @include base_style(rgba(0, 184, 212, 1), $content: "\E88E");
}
```

```success*
Success

success
```
```check*
Check

check
```
```done*
Done

done
```
```scss
.admonition.success,
.admonition.check,
.admonition.done {
  @include base_style(rgba(0, 200, 83, 1), $content: "\E876");
}
```

```question*
Question

question
```
```help*
Help

help
```
```faq*
F&Q

f&q
```
```scss
.admonition.question,
.admonition.help,
.admonition.faq {
  @include base_style(rgba(100, 221, 23, 1), $content: "\E887");
}
```

```warning*
Warning

warning
```
```caution*
Caution

caution
```
```attention*
Attention

attention
```
```scss
.admonition.warning,
.admonition.caution {
  @include base_style(rgba(255, 145, 0, 1), $content: "\E002");
}
.admonition.attention {
  @include base_style(rgba(255, 145, 0, 1), $content: "\E417");
}
```

```failure*
Failure

failure
```
```fail*
Fail

fail
```
```missing*
Missing

missing
```
```scss
.admonition.failure,
.admonition.fail,
.admonition.missing {
  @include base_style(rgba(255, 82, 82, 1), $content: "\E14C");
}
```

```danger*
Danger

danger
```
```error*
Error

error
```
```bug*
Bug

bug
```
```scss
.admonition.danger {
  @include base_style(rgba(255, 23, 68, 1), $content: "\E3E7");
}
.admonition.error {
  @include base_style(rgba(255, 23, 68, 1), $content: "\E14C");
}
.admonition.bug {
  @include base_style(rgba(255, 23, 68, 1), $content: "\E868");
}
```

```example*
Example

example
```
```snippet*
Snippet

snippet
```
```scss
.admonition.example,
.admonition.snippet {
  @include base_style(rgba(0, 184, 212, 1), $content: "\E242");
}
```

```quote*
Quote

quote
```
```cite*
Cite

cite
```
```scss
.admonition.quote,
.admonition.cite {
  @include base_style(rgba(158, 158, 158, 1), $content: "\E244");
}
```

```theorem*
Theorem

thoerm
```
```lemma*
Lemma

lemma
```
```corollary*
Corollary

corollary
```
```definition*
Definition

definition
```
```scss
.admonition.theorem
{
  @include base_style(rgba(0, 176, 255, 1), Righteous, "Thm");
  .admonition-title{
    padding: .8rem 1.2rem .8rem 4.8rem;
  }
}
.admonition.lemma
{
  @include base_style(rgba(0, 176, 255, 1), Righteous, "Lam");
  .admonition-title{
    padding: .8rem 1.2rem .8rem 4.8rem;
  }
}
.admonition.corollary
{
  @include base_style(rgba(0, 176, 255, 1), Righteous, "Cor");
  .admonition-title{
    padding: .8rem 1.2rem .8rem 4.4rem;
  }
}
.admonition.definition
{
  @include base_style(rgba(0, 184, 212, 1), Righteous, "Def");
  .admonition-title{
    padding: .8rem 1.2rem .8rem 4.4rem;
  }
}
```