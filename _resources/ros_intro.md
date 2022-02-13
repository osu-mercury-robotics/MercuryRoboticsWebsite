---
layout: page
title: Introduction to the Robot Operating System (ROS)
description: Beginner intro to ROS's structure and nomenclature
img: 
importance: 1
category: ROS
tags: [autonomy, ROS, navigation, programming, beginner, control]
date: 2022-01-04
---


## Introduction
The [Robotic Operating System (ROS)](https://www.ros.org/) is a software development kit (SDK) that provides many important functionalities desirable when programming robots. Despite its name, it is not an operating system; it can run on both Windows and Linux. A newer version of ROS, called ROS2, is being developed and adopted. The two versions have variations, but conceptually are very similar.

The most important part of ROS is its ability to **send messages between separately running programs**. For example, a Python program can use ROS to easily send information to a separate program written in C++. It even allows for programs on separate computers to communicate. This allows for incredible flexibility and modularity in design, as well as the opportunity to reuse repetitive code between projects/applications.

ROS has a sharp learning curve. The best way to figure it out is to **go out and tinker with it** - make something with the help of tutorials and it'll start to click.

## Conceptual Components
ROS is implemented as a "**network**" of interconnected "**nodes**". Each program or piece of software on the network will comprise of one or more nodes sending and receiving information amongst the network. Information is sent in pre-defined formats collectively called "**messages**", of which there are a huge variety. The links that pass messages between nodes are called "**topics**" and have a pre-defined name that nodes agree on.

As an example, lets say a program is determining how fast a mobile robot should be moving. A separate program needs that information so it can control how fast the drive motors spin.

<div class="row mt-3 mb-3">
    <img src = "{{site.baseurl}}/assets/img/resources/intro_ros/ros_network.png" class="m-auto img-fluid rounded z-depth-1" alt="ROS Network Example" title="ROS Network Example">
</div>

The above diagram shows a node titled "speed_node" publishing a message to the topic "/speed". The "wheel_drive_node" then subscribes to the "/speed" topic, receiving the information it needs.

## Programming Components

From a programming point of view, we consider two constructs called the "**Publisher**" and "**Subscriber**". A publisher will take information from a program and publish it to a topic. A subscriber will subscribe to a topic, reading the information it contains, and bring it into the program.

<div class="row mt-3 mb-3">
    <img src = "{{site.baseurl}}/assets/img/resources/intro_ros/ros_pub_sub.png" class="m-auto img-fluid rounded z-depth-1" alt="ROS Publisher and Subscriber Example" title="ROS Publisher and Subscriber Example">
</div>

An example of a basic implementation of a publisher/subscriber is given [here in python](http://wiki.ros.org/ROS/Tutorials/WritingPublisherSubscriber%28python%29)

An example of a basic implementation of a publisher/subscriber is given [here in C++](http://wiki.ros.org/ROS/Tutorials/WritingPublisherSubscriber%28c%2B%2B%29)

## Other Features

The ROS ecosystem has several important features that streamline development. Firstly, ROS allows for logging and data collection to assist in debugging. That data can be replayed to review it. ROS ties into the Gazebo simulator, allowing for a ROS network and production code to be tested in a simulator before deployment to hardware.

There is relatively widespread community and industry support for ROS. Publicly available algorithms, drivers, and other ROS nodes can be found as "packages" and easily implemented into a project. Avoid reinventing the wheel when not necessary and save yourself some time!

## Versions

As mentioned before, ROS2 is being actively developed as an improvement over ROS1. The rollout is gradual and ROS1 will continue to be supported for a few more years.

A new version of ROS is "released" every so often. In general, packages developed for one version should not be considered compatible with a separate version.

ROS1 distributions are "Melodic" and "Noetic", where "Noetic" is newer and recommend.
ROS2 distributions are "Foxy" and "Galactic" where "Galactic" is recommended.

## More Resources

[ROS1 Tutorials](http://wiki.ros.org/ROS/Tutorials)

[ROS2 Documentation](http://docs.ros.org/)