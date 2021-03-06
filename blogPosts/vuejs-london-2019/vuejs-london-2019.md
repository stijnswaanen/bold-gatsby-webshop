---
layout: post
authors: [elke_heymans]
title: 'VueJS London 2019'
image: ./img/vuejs-london.png
tags: [Conference, Vue.js]
category: Conference
comments: true
date: 2019-10-18
draft: false
type: 'blog'
popular: false
---

## VueJS London 2019: time to get hyped about Composition API and Vue 3

As it is a goal of me to focus more on Vue this year, I had the opportunity to travel to London to attend [VueJS London 2019](https://vuejs.london).
With a conference on the 4th of October and a workshop provided by [VueVixens](https://vuevixens.org) on the 5th October, I was hoping to learn a lot about the future developments of Vue.
The conference and the workshop delivered on my expectations as we learned about accessibility, animations, data visualisations, performance, the new Composition API and much more.
We even had a conference call with Evan You where he announced that Vue 3 was going open source.
During the workshop, I had the opportunity to play around with the brand new Composition API.
In this blog post, I will highlight some key elements that I have learned during the conference and workshop.

# Conference day

With 8 talks, 1 keynote and 4 lightning talks, the conference day promised to be quite busy.
The conference was held at O2 Cineworld, which is not that far from the city center.
As a venue this was exquisite as the accommodation was top-notch, the visuals were beautiful, the talks were clearly audible and the food was great.

<p class="align-center">
  <img src="./img/venue.jpg" class="image fit" alt="The VueJS London venue">
</p>

Before noon, a total of 5 talks were planned with topics ranging from animations, styling, visualisations and performance to the future of the Vue router.

## Animations any Vue app can use, by [Adam Jahr](https://twitter.com/adamjahr)

In a scattered world, the attention of the user of our web applications is often lost quickly.
We really need to capture the user's attention and make sure that they focus on what we want them to focus on.
For example in a web shop when the user is looking at the details of a product, we want to make sure he knows exactly where the buy button is.
To achieve this, we can divert his attention to this button by adding a small but effective animation.
We want to inspire a certain action that will keep the user on the happy path of our application, whether that is selling a product, successfully entering the details for a client registration or something other specific to our application.
With the help of the Vue directives `v-enter`, `v-enter-active`, `v-enter-to`, `v-leave`, `v-leave-active` and `v-leave-to` we have the tools to add the necessary CSS classes that define certain states such as the default state, the hovered state and others.

<p class="align-center">
  <img src="./img/animation-transitions.png" class="image fit" alt="Diagram showing the animation transition directives that are available in Vue">
</p>

> [Course on VueMastery](https://www.vuemastery.com/courses/animating-vue/why-animate) and an introduction on [VueMastery's Medium](https://medium.com/vue-mastery/intro-to-vue-animations-df9594b48800)

## Scripting in style, what's your Vue?, by [Maya Shavin](https://twitter.com/MayaShavin)

Currently CSS has a lot of scaling issues:

* Everything is put into a global namespace
* There are implicit dependencies
* A lot of dead code can exist and is not easily found

With the use of scoped CSS, we can already tackle a lot of these issues.
Vue not only provides us with the tools to add CSS styling next to our component definition but also CSS that is specific for a component.
This is with the help of the `scoped` attribute that we can add to our styling:

```html
<style scoped>
/* your CSS here */
</style>
```
But we still need to watch out as some other rules might be more specific from within another component that is not scoped.
We are also lacking certain functionalities such as scripting in our styles.
So is there a way to be able to script in our CSS while also solving certain issues currently present in CSS?

With the use of [CSS modules](https://github.com/css-modules/css-modules), we can already alleviate several scaling issues as we get certain functionalities such as composition.
Sadly we can not solve all CSS scaling issues such as the fact we do not have an easy way for theming.
Also, scripting is still not possible.

One method of solving the remaining problems is by using [Styled Components](https://www.styled-components.com) for which there exists a Vue plugin called [vue-styled-components](https://github.com/styled-components/vue-styled-components).
The idea behind styled components is to utilise tagged template literals to write actual CSS in your JS.
We can thus write a styled `input` tag that has a switch to set a primary and secondary state like this:

```ts
import styled from 'vue-styled-components';

const btnProps = { primary: Boolean };
const StyledButton = styled('button', btnProps)`
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};
`;

export default StyledButton;
```

So with CSS in JS we can script in our styles.
It also allows us to solve certain scaling issues since we now have typing, composition and more.

But does this mean that we should use CSS in JS by default? 
Is there still a place for vanilla CSS?
CSS in JS is ideal if you need full control over component styling and when you want dynamic styling via props.
Using the scoped CSS that is available in Vue is a good option as you isolate the styling per component.
If you reuse components between projects, you have all relevant styling close to your reused component.
The conclusion is that you should use the right tool for the right job.

> [View slides](https://slides.com/mayashavin/styling-with-vue/fullscreen#/) and [code demos](https://codesandbox.io/embed/style-with-vue-fzzci)

## Identifying and solving performance issues in Vue applications, by [Filip Rakowski](https://twitter.com/filrakowski)

"Every millisecond counts", a statement that holds a lot of truth as [studies have shown](https://developers.google.com/web/fundamentals/performance/why-performance-matters).
To make sure that every millisecond is won and that you get the most out of your application, there are certain actions we can take on our source code to directly improve the speed of our application.

### Lazy loading routes

By default most people will define their routes as such:

```ts
import Foo from 'pages/foo.vue';
import Bar from 'pages/bar.vue';
const routes = [
	{ path: '/foo', component: Foo },
	{ path: '/bar', component: Bar }
];
```

By changing our import statements for our components we can directly impact the bundle size.
When we used to have this:

```ts
import Foo from 'pages/foo.vue';
```

we can now rewrite it to this:

```ts
const Foo = () => import('pages/foo.vue');
```

The result is that our bundle size can get a lot smaller as components are only loaded when they are actually requested for that specific page.
With the help of [Webpack Bundle Analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer), we can visualise this.

### Using tree-shakeable packages

A package that is often used in web applications is `lodash`.
By default, `lodash` is not tree-shakeable but with the introduction of `lodash-es`, we now have access to all functions of `lodash` that are tree-shakeable.
So instead of:

```ts
import { last, zip } from 'lodash'
```

We can now use:

```ts
import { last, zip } from 'lodash-es'
```

With the help of [bundlephobia.com](https://bundlephobia.com/result?p=lodash-es), we can see the individual sizes of all the lodash packages.
If we do not use functions such as `differenceBy` from lodash, we can shave of a couple of kilobytes from our bundle size.

### Activate dynamic imports of child components

When a page is loaded, not all child components are required to already be loaded in.
The reason for this is that not all child components are directly visible.
For example when they are somewhere on the bottom of the page or they are off screen.
But another big reason is that they are used to render a modal.
As not all modals are always needed from the moment the page is opened, we can add a `v-if` to that component.
For example in a product page where we can have a modal with more product details, we might have something like:

```html
<template>
	<div class="product">
		...
		<ProductDetails v-model="product">
		...
	</div>
</template>
```

By adding a `v-if` that holds a boolean to tell if the model should be visible, we delay the actual execution of all the `ProductDetails` code, thus achieving a performance increase:

```html
<template>
	<div class="product">
		...
		<ProductDetails v-if="isProductDetailsOpened" v-model="product">
		...
	</div>
</template>
```

The reason behind this, is that Vue doesn't render elements contained in a `v-if` until the `v-if` returns true.

### Prefetching

Prefetching is a technique in which we use the idle time of our web page to load other assets.
This is a much used technique in for example an infinite scroll where we can already preload one of the next elements that would be shown when the user scrolls down.
Another example is to prefetch the components that we are lazy loading for our pages.
Thanks to Webpack we can [add a specific comment](https://webpack.js.org/guides/code-splitting/#prefetchingpreloading-modules) to accommodate this behaviour:

```ts
const Product = () => import(/* webpackPrefetch:true */ "product.vue")
```

### More performance wins

In order to further improve the performance of our web application, we can:

* Lazy load images
* Use functional components for lists
* Optimise initial state when using ServerSide Rendering
* Cache static assets in a Service Worker

With some basic changes, we can already achieve a lot of performance improvement.

> More information can be found on his [Medium blog](https://medium.com/@frakowski)

## Scalable data visualisation with D3 and Vue, by [Ramona Biscoveanu](https://twitter.com/CodesOfRa)

When wanting to do data visualistions with D3 in a Vue web application, it often happens that Vue is only used as a shelf for the actual D3 code.
This is inherently a bad idea as the D3 code gets complex, not maintainable and it is also not reactive.
We can use the functionalities of Vue to generate part of our D3 code.
Since a lot of D3 can be rendered declaratively in HTML code, we can use Vue to bind all the data to the necessary attributes.
In our component, we could have something like:

```html
<template>
	<svg :width="width" :height="height">
		<path
			v-for="(d, index) in data"
			:d="generateLine(d.values, index)"
			:key="d.country"
			:stroke="colours(index)"
			:stroke-width="selected(index)"
			fill="none"
			@mouseover="onSelected(d, index)"
			@click="onClick(d)"
		></path>
	</svg>
</template>
```

By using `data` and `computed` we can retrieve the correct data from within our Vue component.
In our `mounted` lifecycle hook, we can do all necessary D3 code to use all of our generated SVGs to create the diagrams that we want.

> [Code example on Ramona's GitHub](https://github.com/CodesOfRa/d3-vue-graph/blob/master/src/components/Tree.vue) with the [live application available online](https://outofmylens-flowers.netlify.com/) and the [slides of her talk](https://slides.com/codesofra/data-visualization-in-2#/)

## A new router to guide your apps, by [Eduardo San Martin Morote](https://twitter.com/posva)

There are three kinds of routers possible:

* Imperative: we define the routes and add a callback function to determine how the page should be rendered. An example of this is [page.js](https://github.com/visionmedia/page.js).
* Declarative: routes are defined on a component level by using for example a specific attribute. The [Reach Router](https://reach.tech/router/) is an example of this.
* Configuration based: routes are defined separately with the components that they are linked to. The Vue router is a configuration based router.

Because of this configuration based nature of the `vue-router`, we are missing the option to add or remove routes and we also lack declarative routing.

The current implementation of `vue-router` has a lot of functionalities built in that are specific to managing the history while we actually want to separate this.
In an ideal situation, we want the router to be the connection between the components and the code that manages the browser history.
When a user navigates to a new page, the router calls the history code to add the new page to the history.
When the user navigates back, the router retrieves the previous page from the history.
In the current implementation, this is all not clearly separated.

So what are the next steps for the Vue router?
One major improvement would be the use of TypeScript as this would help developers on using and extending the Vue router in the right way.
This is in the same spirit as Vue 3 that is also written fully in TypeScript.

Another improvement lies in the use of a ranking system for the routes.
Currently routes are checked for a match based on the order in which they are defined.
This means that a catch-all route such as `(.*)` in the beginning of the routes definition would render the other routes useless.

A major addition to Vue router would be the ability to have dynamic routing.
Components could thus add or remove routes.
A final addition would be the full use of the Composition API so we have functionalities such as `useLink`, `useLocation`, `onBeforeRouteLeave` and `onBeforeRouteUpdate`.

The focus of the new router will be mainly on supporting Vue 3 while smaller improvements will be done for Vue 2.

> [View slides](https://slides.com/posva/a-new-router-to-guide-your-apps)

## Lightning talks

### How to get your product owners to write your functional tests, by [Callum Silcock](https://twitter.com/csiilk)
With the help of the [Cypress Cucumber preprocessor](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor) Callum was able to demonstrate how code like this could be processed by Cypress:

```cucumber
Feature: Logging In

  Tests the user can successfully login and log out

  Scenario: Logging In Sucessfully
    Given I am on the "login" page
    When I input my "email" as "contact@csi.lk"
    And I input my "password" as "hunter2"
    And I click the "login" button
    Then I should be on the "dashboard" page
```

The idea behind this, is that functional tests can be written in a very clear and understandable format so that even product owners can help with writing them.

> [View slides](https://speakerdeck.com/csilk/then-with-cypress) and an [example implementation](https://github.com/csi-lk/cypress-gwt-example)

### Awesome JS is Awesome, by [Guillaume Chau](https://twitter.com/Akryum)
In the [awesome-vue](https://github.com/vuejs/awesome-vue) repository we can already find a curated list of interesting resources for when you want to develop an application with Vue.
Guillaume decided to create a specific website that has an overview of all good packages for your project, whether it is a Vue project or a Nuxt project or others.
The website will keep on growing with new project types and packages added regularly so that it could grown into a knowledge base on what good packages would be for your future projects.

> The website is available at [awesomejs.dev](https://awesomejs.dev/)

### Focus Management with Vue, by [Maria Lamardo](https://twitter.com/MariaLamardo)

Maria is very enthousiastic about accessibility on the web.
One of the quirks she has found is that when a page is loaded or something dynamic happens on the page like opening a modal, the focus is incorrect.
Basically this means that people who rely on a screen reader, often have issues with navigating when for example a modal is opened.
By adding a basic directive to your component that uses the `inserted` [hook](https://vuejs.org/v2/guide/custom-directive.html#Hook-Functions), you can alleviate this issue:

```ts
export default {
	// ... other component code
	directives: {
		focus: {
			inserted: function(el) {
				el.focus();
			}
		}
	}
}
```

She also talked about how you can have hidden HTML elements to help users with a screen reader to have feedback on what just happened when they for example submitted a form.

> Maria's [repository for her talk](https://github.com/mlama007/FocusManagement) and for working examples

### Application Shortcuts with a Renderless Event Component, by [Rolf Haug](https://twitter.com/rahaug)

By using `$listeners` in a Vue component, Rolf managed to create a renderless event component that handles everything you need to act on global events.
The sourcecode can be found on his [GitHub](https://github.com/vueschool/application-shortcuts/blob/master/src/components/EventListenerFinal.vue).

One example use could be this in the template of a video player component:

```html
<event-listener @keydown.space="toggleVideo" />
```

Now whenever the user presses on the spacebar of his keyboard, the handler `toggleVideo` will be called to toggle the video from/to playing/pausing.

The same can be achieved by using the [vue-global-events package](https://www.npmjs.com/package/vue-global-events).

> Rolf's [repository for his talk](https://github.com/vueschool/application-shortcuts) and the [vue-global-events package](https://www.npmjs.com/package/vue-global-events)

## Vue3's Composition API explained visually, by [Gregg Pollack](https://twitter.com/greggpollack)

With the upcoming arrival of the Composition API, a visual explanation of the possible changes to your code was very useful.
The Composition API allows you to focus more on the features instead of only the components.
If we would colour code every feature in our code, a component in the options-based API with a lot of features would end up having elements of the same feature all over the component.
For example our sorting feature would be red, our searching feature would be purple and so on.
This is because the current options-based API forces you to group everything into elements such as `data`, `props`, `methods`, `computed` and `watch`.

<p class="align-center">
  <img src="./img/options-api-vs-composition-api.png" class="image fit" alt="Comparison of options-based API and Composition API with each feature colour coded">
</p>

With the Composition API we would introduce the use of a `setup` method for each component.
In this `setup`, we declare the scope that will be available to our template.
While in the options-based API we defined our scope in the `data`, `props`, `methods`, `computed` and `watch` properties and they are bound to the object instance, we now can group all this scope into `setup`.
With the Composition API we have the freedom to group our features in the `setup` method and even extract them into separate functions so they can be reused in other components.
This is because `setup` returns the scope that can be used in our template.
Parts of that scope could be retrieved from separate functions.
Each colour in the image above can thus be potentially extracted into separate functions such as `useSorting`, `useSearch` and so on.

> [Vue 3 Composition API cheat sheet](https://www.vuemastery.com/pdf/Vue-3-Cheat-Sheet.pdf)

## The new Composition API, by [Thorsten Luenborg](https://twitter.com/linus_borg)

After we had the visual explanation of what the Composition API encompasses, it was time to dive into more details and see some example code as can be found on [Thorsten's GitHub](https://github.com/LinusBorg/composition-api-demos).

While in the past your components would become a clutter of all your features together spread out over your component, the Composition API allows them to be grouped together.
For example when you have a component that supports multiple features such as sorting and pagination, these features would be spread out over the component.
The data necessary for the sorting and pagination would be put into `data` and `props`.
The functions that actually implement these functionalities would be scattered over `methods`, `computed` and `watch`.
Thanks to the portable reactivity of the Composition API, we can simplify our components that use for example pagination to:

```ts
import usePagination from './img/use-pagination'
export default {
	setup() {
		const pagination = usePagination({
			perPage: 10,
			items: [1, 2, 3, 4, ..., 100],
		});
		// other features defined here
		return {
			pagination,
			// other scopes returned here
		};
	}
}
```
`usePagination` is a function that encapsulates all functionality specific for pagination:
```ts
export function usePagination(settings) {
	const data = reactive({
		perPage: 20,
		currentPage: 1,
		...settings
	});
	const amountOfPages = computed(() => Math.ceil(settings.items / perPage));
	// other functionalities here
	return {
		...toRefs(data),
		amountOfPages
	};
}
```

In our component we will then be able to use `currentPage`, `amountOfPages` and such, just like when we would have defined them in `data` and `computed`.
Currently Composition API is already available in Vue 2 thanks to the [@vue/composition-api package](https://github.com/vuejs/composition-api).

> [View slides](https://github.com/LinusBorg/talks/raw/master/2019-10-04%20Vuejs%20London/New%20composition%20API%20%20-%20Vue.js%20London%202019-10-04.pdf) and a full explanation can be found in the [Composition API RFC](https://vue-composition-api-rfc.netlify.com/#summary)

## Live coding: the new Composition API, by [Jason Yu](https://twitter.com/ycmjason)

<p class="align-right">
  <img src="./img/keyboard-keyboard.jpg" class="image right" alt="The KeyboardKeyboard app Jason was building">
</p>

The best way to get to know the new Composition API is seeing it live in action.
So Jason took the challenge upon himself to live code something called a `KeyboardKeyboard`.
As a musician and a programmer, he is very enthusiastic about keyboards.
So he decided to program his computer keyboard to sound like a piano keyboard.
With the use of Web Audio API he managed to program a web app in Vue with Composition API in just over 30 minutes.
He mainly used Composition API to encapsulate certain key features such as `useMusicNote` and `useKeyDown`. 
It was a fun live coding session as he was able to really captive the audience's attention.

> [The source code is on his GitHub](https://github.com/ycmjason-talks/2019-10-04-vuejs-london-conference-2019/tree/completed) and a screen capture can be found on [YouTube](https://www.youtube.com/watch?v=_K5zbgJ_z9w)

## Evan You's keynote: launch of Vue3 open-source, by [Evan You](https://twitter.com/youyuxi)

<p class="align-right">
  <img src="./img/evan-you-during-keynote.jpg" class="image right" alt="Evan You during his keynote">
</p>

We ended the conference with a keynote from Evan You, the creator of Vue.
There was already a lot of talk about Vue 3 in the last couple of months and in this keynote he had a great preview of what the power of Vue 3 will look like.
For Vue 3, he and his core team have been very active to rewrite the whole project.
By rewriting the whole runtime and compiler from scratch, they were able to add native TypeScript support everywhere.
They were also able to make the compiler completely modular.
With some clever tricks during compilation time such as hoisting static elements in the DOM tree, the runtime can be optimised to only take the dynamic elements into account.
A major announcement about the upcoming Vue 3 is the fact that it is fully tree shakeable.

Tree shakeability in combination with all the other upcoming features will result in a major performance improvement as Evan briefly demonstrated.
The current speed improvement is already sevenfold.
With some features still in development, Evan expects an even bigger improvement in speed before the actual release of Vue 3.

As a special treat, Evan had set the visibility of the repository from private to public.
From the 4th of October onwards, Vue 3 is fully open source.

# Workshop: hands-on with the Composition API, by [Vue Vixens](https://twitter.com/VueVixens)

<p class="align-right">
  <img src="./img/vuevixens-logo.png" class="image right" alt="The Vue Vixens logo">
</p>

With almost half of the conference day spent on talks about the new Composition API, the opportunity to actually incorporate it into a workshop was taken by the Vue Vixens.
Vue Vixens are foxy people who identify as women and who want to learn Vue.js to make websites and mobile apps.
The workshop was held at CCT Venues, not that far from the O2 Cineworld.

The first goal of the workshop was to implement our own version of a Spotify client in the browser, built with the Composition API in Vue.
Sadly Spotify has limited the use of their SDK to only premium users of Spotify.
So after having gotten a good explanation about what the Composition API is made of along with some interesting discussions on how to use it, we changed it up a bit.

As Vue Vixens also organises other workshops, we took one of the solutions for one of those workshops.
We rewrote that solution from an implementation in the options-based API to the Composition API.
Since almost everybody present had been at the conference the day before and the Composition API was well explained, we were able to finish up quickly.

<p class="align-center">
  <img src="./img/vuevixens-workshop.jpg" class="image fit" alt="The people who attended the Vue Vixens workshop">
</p>

Thanks to the organisers [Maria Lamardo](https://twitter.com/marialamardo) and [Kristin Ruben](https://twitter.com/kristinruben) for the great workshop!

> [Vue Vixens website](https://vuevixens.org) and the [Vue Vixens workshops](https://workshops.vuevixens.org/)

# Conclusion

London was a great city to visit and with an excellent organised conference, this was a pleasant experience.
With the future release of Vue 3, it was no surprise that most of the conference was focused on Vue 3.
I've learned a lot and with the help of the workshop given by the Vue Vixens, I am convinced that Vue 3 has a bright future ahead.
I look forward to putting this new knowledge into practice.