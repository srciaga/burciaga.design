---
title: "Home"
contact: true
description: "{{ .Site.Params.Description }}"
---

{{< rawhtml >}}
<div id="intro">
    <h1>Hi, I'm <a href="/about.html">Steph</a>!</h1>
    <p>I'm a <span>designer</span> specializing in layouts, logos, and interfaces.</p>
</div>
<div id="categories" class="cards">
    <a href="/gd.html">
        <img src="/img/gd.jpg" alt="Graphic Design" />
        <p>Graphic Design &#8594;</p>
    </a>
    <a href="/ui.html">
        <img src="/img/ui.jpg" alt="User Interface" />
        <p>User Interface &#8594;</p>
    </a>
</div>
{{< /rawhtml >}}