var knex = require('../db/db.js');

function checkHashtag (hash, force) {
  const hashtag = hash;
  const error = new Error('No code. Received hashtag: ' + hash);
  error.errorObject = {
    code: 8001,
    msg: 'No code'
  };

  if (hashtag !== '' && hashtag !== null && typeof hashtag !== 'undefined') {
    return knex.table('campaigns').where({ Hashtag: hashtag }).
    select('*').
    then((data) => {
      if (data.length === 0) {
        throw new Error({ msg: 'This hashtag doesnt exist.' });
      }

      const [item] = data;

      if (force === true) {
        return item;
      }

      if (item.CurrentUsages >= item.MaxUsages) {
        throw new Error({
          code: 8010,
          msg: 'This hashtag is no more available.'
        });
      }

      return item;
    });
  }

  return Promise.reject(error);
}
function checkMultiHashtag (hash, number) {
  if (!hash) {
    return true;
  }

  return checkHashtag(hash).
  then((item) => {
    if (item.MaxUsages - item.CurrentUsages >= number) {
      return item;
    }
    throw new Error({
      code: 8010,
      msg: 'There are ' +
        (item.MaxUsages - item.CurrentUsages) +
        ' of this coupon available.'
    });
  }).
  catch(() => {
    throw new Error({
      code: 8010,
      msg: 'This hashtag is no more available.'
    });
  });
}

function updateHashtag (hash, force) {
  return checkHashtag(hash, force).
    then((item) => knex.table('campaigns').
      where({ id: item.id }).
      update({ CurrentUsages: item.CurrentUsages + 1 })).
    catch((err) => {
      if (err.errorObject && err.errorObject.code === 8001) {
        return true;
      }
      throw err;
    });
}

module.exports = {
  checkHashtag,
  checkMultiHashtag,
  updateHashtag
};