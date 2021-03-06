---
authors: [dimitri_de_kerf]
title: 'Flutter: Hybrid apps for mobile & beyond.'
image: ./img/Flutter.jpg
tags: [Android, Flutter, Hybrid, iOS, Mobile]
category: Flutter
comments: true
date: 2019-01-10
draft: false
type: 'blog'
popular: false
---

## Intro

Mobile development has always intrigued me.
Bringing data to life by visualizing it with different components and being able to carry your app along inside your pocket is something special.
I still remember the excitement I felt when working on my first mobile app in university,
even with the lack of good resources back then and the sluggish emulator which was available at that time.

The mobile world has kept expanding with big improvements in resources, frameworks, tools and designs.
From the first iPhone to having your refrigerator running your favorite apps, more and more possibilities and challenges have become available to keep you going.
Nowadays, there are different paths that you can follow to create those apps.
Native, hybrid or web apps, it all depends on what you want to achieve and how many resources are available.
Each has its benefits and pitfalls, which doesn’t make the decision any easier.
Do you want to give your audience the best native experience with great performance?
Or does a hybrid app suffices where you might compromise in speed and in look & feel of a native app?
Flutter might be the answer, by providing you the best parts of both worlds.

## Beautiful native apps in record time

>Flutter allows you to build beautiful native apps on iOS and Android from a single codebase.

<span class="image left"><img alt="Flutter" src="./img/flutter_logo.jpeg"></span>

A promising statement which is presented to you when you browse to [Flutter.io](https://flutter.io/).
A statement that explains perfectly what Flutter is in fact.
Flutter is an open source mobile UI framework made by Google.
With Flutter, you can build beautiful apps that run at native speed.
Given the single codebase, you don’t have to develop the same app twice for both iOS and Android.
Flutter is even the first-class citizen for Fuchsia, an upcoming mobile OS that is currently being developed by Google.
Flutter apps follow platform conventions and interface details, so the scrolling, fonts, navigations, etc. will look natively respecting the specific platform.
All of this results in beautiful apps that require less time and resources to develop and this without compromising on quality, features, performance or design.

<h3 style="clear: left;">Performance at its core</h3>

<span class="image right"><img alt="Flutter" src="./img/flutter-gallery.gif"></span>

How did the Flutter team achieve all of this?
Why aren’t there any downgrades in performance while being a hybrid app?
The reason for this is that Flutter is built with performance in mind from the beginning.
In fact, being performant was the main reason why the Flutter team started with the framework.
Being hybrid was more of a side-effect because of the way the implementation is set up.

Because Flutter is so performant, you are guaranteed that Flutter apps will run at 60 FPS and more.
This leads to smooth animations and an instant responsive app which results in a great user experience.
Your app will also render perfectly on older devices, while even some native apps may have trouble to keep running at a constant refresh rate.

To achieve this performance, Flutter does something different than other hybrid solutions.
The framework avoids having a JavaScript bridge between the app and the platform by using a language that compiles to native code.
This bridge is typically the bottleneck when it comes to performance in hybrid solutions.
The lack of the JavaScript bridge allows Flutter to communicate directly with the platform.
Which language are we talking about?
Well, all of this is made possible with Dart.

## ‘Dart’ you say?

<span class="image left"><img alt="Dart" src="./img/dart.png"></span>

[Dart](https://www.dartlang.org/) is a programming language that was also developed by Google.
Its purpose is to build web, server and mobile apps.
You can develop your app with Dart, which will either be compiled to JavaScript or into native code.

The Flutter team considered different languages, but many of them had drawbacks in one of the four dimensions for evaluation that they used.
Since Google had its own language ready to be used, the team also took a look at Dart.
Dart scored high on all the requirements and criteria that the team had predefined, which is why the decision was obvious.

There are some huge benefits when using Dart compared to other languages.
One of them is the Dart runtime and compiler.
This enables Dart code to be compiled both AOT (Ahead Of Time) and JIT (Just In Time).
With AOT, Dart is compiled to native code which ensures that the execution is fast, high-performing and predictable.
Your app will start up faster and it will feel smoother while running it.

JIT enables stateful hot-reloading, which gives developers an extremely fast development cycle.
Once you hit Save in your editor, the code changes are applied to your running app within a second without losing state.
This gives productivity an enormous boost and helps you to reach your goals faster than before.
No more refilling the same form to test some validation or navigating to a specific screen for you.
It is really impressive to see hot reload in action, especially when you’re used to the development cycle within native mobile development.
To me, it kind of feels like magic.

You might be asking yourself if it is worth learning a new language for a new framework.
From my experience, Dart is really easy to adopt, especially if you’re used to Java or JavaScript/TypeScript.
Dart feels natural to use and is a powerful language.
Most of the time when I'm playing around with Flutter I even don’t realize that I’m writing in another language.
In fact, it just ~~works~~ writes.

## Everything is a widget

The native performance of Flutter apps is great, but how can you use Flutter to build your app?
The answer is widgets.
They are the building blocks that Flutter uses to build up your interface.
Widgets are responsible for the native look and feel that you want to create, so they are really important.
With widgets you’ll be able to create beautiful apps, exactly how your design team imagined them to be.

<span class="image left"><img alt="Widgets everywhere" src="./img/meditation.jpg"></span>

In Flutter, everything is a widget!
Ranging from a button, an image, to the app itself.
Even the padding, positioning or navigation are all defined by the use of widgets.
You combine widgets to build up the interface to your liking.
Flutter will generate a widget tree out of it and uses that tree to render the layout on the screen of the device.

Flutter uses its own set of widgets, which assures you have a pixel perfect layout on every device.
You’re not dependent, nor limited by the widgets provided by the platform.
The only thing that Flutter needs is a canvas to draw on.
You can compare Flutter with a game engine, or in this case rather an app engine.
By providing its own set of widgets, you can customize all of them to your liking.
This enables you to include your company branding through your app, ranging from colors to the shape of buttons.

All the widgets are written in Dart.
Because Flutter is an open source project, you can use the source code as a reference while applying the widgets.
With Flutter you don’t have to worry anymore about support libraries to render your apps on old devices or about OEMs that decide to alter the platform widgets because they can.
You can even enjoy the beauty of Material Design on devices that were released years before Material Design was introduced.
Your app will also be future proof, as new design implementations of platform widgets won’t affect or break the layout of your app.
<span class="image right"><img alt="JWorks widget" src="./img/jworks_widget.png"></span>
If there are any breaking changes with future OS versions, then it’s a bug for Flutter to resolve instead for you.
Flutter even added notch-support for the iPhone X before the phone was released.

Here you can find a quick example how you can build up your layout by combining different widgets together.
The JWorks widget is rendered inside a default Material app template on the iPhone XS.

```dart
import 'package:flutter/material.dart';

class JWorksWidget extends StatelessWidget { // I'm a widget
  @override
  Widget build(BuildContext context) {
    return Card( // I'm a widget too
      elevation: 4.0,
      child: Padding( // Yep, another widget
        padding: const EdgeInsets.all(16.0),
        child: Image.network( // We're all widgets!
          'https://ordina-jworks.github.ioimg/jworks/jworks-400x400.png',
        ),
      ),
    );
  }
}
```

## One hybrid framework to rule them all

On the 4th of December 2018 the first [Flutter Live](https://developers.google.com/events/flutter-live/) event was hosted.
A lot of exciting announcements were made, which definitely shows that the Flutter team is determined to keep improving.
[The first stable version was released](https://developers.googleblog.com/2018/12/flutter-10-googles-portable-ui-toolkit.html) almost two years after the first Alpha version was released.

<img class="image fit" alt="Hummingbird" src="./img/hummingbird.png">

Another huge announcement was revealed about the future plans of Flutter.
The first step is [Hummingbird](https://medium.com/flutter-io/hummingbird-building-flutter-for-the-web-e687c2a023a8), or Flutter for the web.
Since Dart can also compile to JavaScript, this was a logical step to take.
Being able to run on the web, you can also create a Progressive Web App with Flutter, so your mobile app which runs in the browsers becomes a web app.
Appception right there.

Google is also working to bring Flutter to desktop with Flutter Desktop Embedding.
To prove this concept, the presentation of Flutter Live was running in a Flutter app on a laptop.
This means that Flutter won’t be a mobile SDK solely, but it might become the way to go SDK for hybrid apps across mobile, web and desktop.
Maybe later on, any device that can render pixels will be able to run Flutter apps.

Furthermore, the Flutter team is working to provide integration between Flutter and your existing native apps.
Not everyone can start from scratch, so having a way to gradually move your app to Flutter is a very welcome addition if you’re planning to do so.
This project, which contains all the APIs and tooling, is named Add2App and is currently in a preview state.
With Add2App, you can launch a view containing your new Flutter app from your existing native app.

You can also work in the opposite way with the introduction of Platform Views.
These views allow you to add native content inside your Flutter apps.
Platform Views unlocks Flutter to render Google Maps and WebViews inside the Flutter app.

## Conclusion

Flutter keeps getting better and the community keeps on growing.
More and more [companies](https://flutter.io/showcase) start to embrace Flutter
and [developers](https://itsallwidgets.com/) are excited and positive when using Flutter in their apps.
It surely looks promising that Flutter can become a big player in the mobile world.

While I was getting in touch with Flutter and digging through the documentation and examples,
I got more and more fascinated about all the possibilities that you can achieve with this new mobile SDK.
The Flutter journey reminded me back of the feeling I had when I was working on my first mobile app,
discovering a new mobile world full of possibilities, this time built out of widgets.