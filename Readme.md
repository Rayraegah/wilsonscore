# Wilson Score interval (1927)

<p>(<em>w</em>⁻,&nbsp;<em>w</em>⁺)&nbsp;≡ [<em>p</em>&nbsp;+&nbsp;<em>z</em>²/2<em>n</em>&nbsp;±&nbsp;<em>z</em>√<span style="text-decoration:overline;"><em>p</em>(1 –&nbsp;<em>p</em>)/<em>n</em>&nbsp;+&nbsp;<em>z</em>²/4<em>n²</em></span>] / [1 +&nbsp;<em>z</em>²/<em>n</em>].</p>

The score interval is **asymmetric** (except where `p=0.5`) and tends towards the middle of the distribution (as the figure above reveals). It cannot exceed the probability range [0, 1].

It is reddit's _[best](https://github.com/reddit/reddit/blob/bd922104b971a5c6794b199f364a06fdf61359a2/r2/r2/lib/db/_sorts.pyx#L70-L85)_ comment sorting system, [explained by xkcd author Randell Munroe](http://blog.reddit.com/2009/10/reddits-new-comment-sorting-system.html).

## Usage

Statistically, it is the lower bound of the [Wilson Score interval](http://en.wikipedia.org/wiki/Binomial_proportion_confidence_interval) at the alpha level based on supplied Z score.

```javascript
confidence = wilsonScore(upvotes, downvotes, z);
```

### Calculation of `z`

The `z score` is a statistical value which roughly means how many standard deviations of safety you want, so it maps directly onto the confidence level of the Wilson Score interval.

The point at which the cumulative distribution function of the standard normal distribution takes the value 1 - α/2. Equivalently, it is the point with respect to which α/2 of the probability mass (of the standard normal distribution) lies "to the right" and 1 - α/2 lies "to the left".

It will default to `z=1.96` if left out, representing a `95%` confidence level in the lower bound. Otherwise, values through `1.0` (69%), to `3.3` (99.9%) good alternatives. Below is a table containing `z` values at various confidence levels.

| **Confidence Level** | **z score** |
| :------------------: | :---------: |
|         80%          |    1.28     |
|         85%          |    1.44     |
|         90%          |    1.64     |
|         95%          |    1.96     |
|         98%          |    2.33     |
|         99%          |    2.58     |

## License

This project is released under MIT license
