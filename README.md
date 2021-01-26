# Optimizing Microsite Architectiure with Module Federation

Websites are becoming more advanced and are offering more functional
web experiences. As modern web apps continue to grow in size to include new
features, developers are faced with the challenge of scaling their architectures to support
codebases that can scale so quickly.

Traditionally, when it came time to scale a website, it was a matter of adding some
new files to an existing monolithic application. Usually this monolith was
responsible for the API / and UI of the app and all code and business logic would then live in this monolith.
Every developer on the team would contribute to this one giant codebase and overtime
compilation times would grow and a new deploy would be required for any type of
change, etc.

Then, along came Domain Driven Design and the micro service architecture. This was great
because it was the first time we starter rganizing and building our systems
to match the organization of the business. Finally, we could see the clearly defined domains
of the business reflected in the archticture of its technology. With this new approach
towards creating systems, one of the biggest things in play was the active
seperation of the code base into many stand-alone microservices.

As we saw, spliting up the codebase was key in terms of organizing the system and
developer teams into dicreet units of functionality that coudl be independently
developed and deployed. Organizations soon saw an increase in development and
iteration speed as well as an increase in the ease of manaign developer teams
at the team level. Micro services did, however, introduce many many new challeneges of their
own that we will not dive into.

The advancement of microservies was great but over time, we still saw one area of the
codebase that was still _not_ being divided up along the boundaries of the domains: the UI layer.
Why was it that eventhough backend microservices were being created for well over 10 years before this trend
starting being applied to the UI layer? It because splitting up code is easy,
stiching code back together again is very hard, especially in the UI. Lets dive into this a bit.

Dividing an api monolith, for example, generaly consists of creating many smaller servers
and then placing the code from the monolith into those servers. Then, the UI can talk to
that many more servers, or the servers can call each other. Point is: in this set-up, each server is running on
it's own dedicated process, with its own runtime. As a result, developers dont need to worry
about these servers needing to share anything, including a runtime.

This is not the case for dividing a UI a codebase into smaller codebases.
Unlike API code in micro services, the app UI code all runs in one place at the same time: the browser.
What this means for developers working on the UI layer is that they can split up a codebase by putting
html/css/js into different repos, _but_ UI developers cannot reintegrate those same
codebases like they can servers. Developers must stitch their html/css/js back together
to function harmoniously in a shared, single-threaded, js runtime.

Rather than keep the UI monolith, the industry started to tackle the problem of the
UI monolith in new ways. One of those approaches is called the Microsite
architecture, and its what many companies are still using today.

The microsite architecture is characterized by many small websites that are all
hosted undeer the same domain and are stitched together by the domain router at
the http-level. Meaning that as one navigates around a Microsite, they are
navigating between many different websites, with their own discreet teams and codebases.
This architecture brought DDD and all of its benefits to the UI layer such that vertical slices of domain functionality were finally seen all the way through the stack and organizations
could draw some clean lines around teams and the products they worked on.

This approach worked well and allowed companies to horizonatally scale their systems
into infinity, however, there is no singular perfect architecture, and as a result every single architecture
has its own positive and negative trade offs. From here on out we will talk about some of the
negative drawboacks of the microsite architecture and how a new technology, module federation,
can be used to solve them.

Negtive trade offs with microsite architecture:

from a performance stand-point, microsite architectures increase code duplication
in the UI layer. For example, if microsite A and microsite B both
use react as a javascipt framework, the user then has to download react.js as
they naviagte between the two websites. This is a UX problem because this increases
download times and the user is left waiting for almost longer peroids of time
then a traditional multipage site would take, and thats a big part of why SPAs were created,
the help decrease the number of entire page reloads.

This code duplication is not just a runtime performance problem but it can also
manifest as an organiztional performance bottle-neck.
