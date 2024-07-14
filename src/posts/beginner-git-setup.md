---
title: "A Beginners Guide to Git"
imageUrl: "/post-images/git-banner.png"
publishedAt: "2024-07-13"
summary: "A basic guide on how to get Git source control setup on your device"
author: "Phillip Coleman"
---

If you don't want a background to what VCS is or just don't care skip ahead by clicking [here](#what-is-git). If you don't even want a Git background and just want to get straight to setting up click [here](#git-setup).

## What is version control

A **version control system (VCS)** allows you to keep multiple versions of files, track changes to those files and revert them to previous states just to name a few things it can do!

There are different types of version control systems such as:

- local
- centralized
- distributed

### Local Version Control System

A local vcs is contained entirely within a local computer which uses a local database to store file changes as a patch. Each patch only contains the changes made to the file since its last iteration and if you need to get the file at a certain point in time, you basically sum up all the changes from the beginning to the point in time that you want. 

A big issue with this is how delicate this versioning can be. If anything happens to the local database such as a missing patch all versions after that point would be lost. More importantly, it's almost impossible to collaborate on files with other developers.

### Centralized Version Control System

A centralized vcs uses a single server to store all versions of the files which clients are able to access. An example of a system like this is Team Foundation Server Version Control (TFSVC) which we still utilize today within LPS. The main drawbacks of this type are that if your centralized server has issues file history could be lost. Another issue is the inability to access the information in offline environments or when connectivity is poor.

### Distributed Version Control System

A distributed version control is like a peer-to-peer network in which all clients are responsible for maintaining their own version of the history of a file or collection of files. This is the most useful as it allows offline access to the file history to easily allow reverting to prior states as well as an easy way to collaborate between developers. 

The main drawback with this type is the users requirement to ensure they are up-to-date with their files as well as others. Performing further changes on a file that a peer also has changes on can lead to file conflicts which take time to work through to resolve. However, many tools are provided to help make this as seamless as possible.

## What do we use?

As mentioned above, we still use Centralized Version Control within LPS in the form of TFSVC for some legacy applications. But all other methods have been outshined by what the distributed vcs **Git** offers for collaboration and efficiency. Git has taken over in the project collaboration space as the defacto version control system for teams big and small. Although Git on its own is not the reason it is so popular but the amazing tools built around it that make the experience as intuitive as possible.

## <a id="what-is-git"> </a> What is Git

Git is a distributed version control system. It was developed in 2005 by Linus Torvalds, the author of the Linux kernel, in response to a licensing dispute with the source control provider he was using at the time. It took 5 days to develop...

### Basic Git Terminology

When referring to Git there are a few terms that we commonly use:

- **Repository** - The repository is the directory that contains all of the changes that have been made to files in a given directory. It is represented by a ".git" folder.
- **Commit** - A commit is a snapshot of the current changes that have been made containing metadata.
- **Branch** - This represents a separate history of changes within a single repository.
- 


## <a id="git-setup"> </a> Git Setup


### 1. Installation

Setting up Git varies depending on your platform. We typically use Windows do you would simply download the [.exe file]() and install. If you are having issues with permissions, first make sure you have **local admin** before trying to install. If you are still having issues ensure you are running the executable from within **Program Files** or **Program Files (x86)**.

When going through the install process all default options can be selected unless you know what you are doing. Ensure that **Git Credential Manager for Windows** is selected as this will be important for connecting to remote repositories later.

### 2. Verify

To verify that Git was installed successfully, open a command prompt or terminal and type

```bash
git --version
```