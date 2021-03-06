# Changelog

## v0.11.5 (2016-04-23)

* Fixed an issue where `Listing#fetch_all()` would sometimes return an incomplete Listing when fetching Comment replies
* Fixed an issue where the snoowrap constructor was not allowing the `client_secret` parameter to be an empty string
* Fixed an issue where RedditContent objects were being converted to JSON incorrectly

## v0.11.4 (2016-04-22)

* Fixed an issue where small comment reply chains were never considered 'finished'

## v0.11.3 (2016-04-22)

* Fixed an issue where Submissions and Comments with a large number of top-level replies could end up with internally-used 'MoreComments' objects in the replies Listing.

## v0.11.2 (2016-04-22)

This update contains a few new features and bugfixes.

* Added a `VoteableContent#expand_replies` function, which makes it easier to fetch and enumerate large comment trees
* Added support for fetching deep comment chains in which a "Continue this thread" link appears on the main site
* Improved the documentation pages:
  * Almost all functions now have usage examples
  * A `snoowrap` global is exposed for use in the dev console
* Improved the validation for `snoowrap#config` parameters
* Added the ability to block the author of any `ReplyableContent` object
* Fixed an issue where unsubscribing from a Subreddit would return a 404 error if the user wasn't subscribed in the first place
* Fixed an issue where `Submission#get_link_flair_templates` would throw errors if Proxies were disabled
* Fixed an issue where `LiveThread#get_contributors` would have an inconsistent structure if there were any pending contributor invitations
* Fixed an issue where `Subreddit#assign_flair` was not returning a chained Promise

## v0.11.1 (2016-04-06)

* Fixed an issue where certain Subreddit functions would throw errors if Proxies were disabled

## v0.11.0 (2016-04-05)

This update contains a small number of breaking changes.

* **[breaking]** Listings are now immutable. This avoids race conditions that could previously occur while expanding Listings. `Listing.prototype.fetch_more` now returns a new Listing containing all fetched items, instead of mutating the original Listing.
* **[breaking]** PrivateMessage replies are now arranged recursively into a tree structure.
* Added support for reverse Listing pagination if the `before` query parameter is set.
* Added the `debug` config option, which logs API calls and ratelimit statistics.
* Added a `skip_replies` option to `Listing.prototype.fetch_more`, for faster comment fetching when comment replies are not needed.
* Added support for Listings to have extended `limit` properties when being initially fetched. For example, `r.get_hot({limit: 150})` will now return a Listing with 150 elements, rather than being capped at 100.

---

*This changelog does not cover versions before v0.11.0.*
