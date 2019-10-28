#### Méthodes asynchrones et transitions

Toutes les méthodes API sont **asynchrones** et démarrent une **transition**. Elles font un retour aussitôt que la transaction a démarré mais **avant qu'elle termine**. De plus, un appel à une méthode sur un **composant de transition sera ignorée**.

[Consultez la documentation JavaScript pour plus d'informations](/docs/{{ .Site.Params.docs_version }}/getting-started/javascript/).
