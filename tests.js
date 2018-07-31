const assert = require("assert");
const wilsonScore = require("./index");
const { upvotes, downvotes, confidence } = require("./data");

const len = confidence.length;

for (i = 0; i < len; i++) {
    assert(
        wilsonScore(upvotes[i], downvotes[i]).toFixed(10) == confidence[i],
        "Valid wilson score"
    );
}
