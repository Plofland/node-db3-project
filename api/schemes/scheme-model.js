// scheme-model
const { where } = require('../../data/db-config');
const db = require('../../data/db-config');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
  update,
  remove
};

function find() {
  return db('schemes');
}

function findById(id) {
  return db('schemes').where('id', id).first();
}

function findSteps(id) {
  return db('schemes as sc')
    .join('steps as st', 'st.scheme_id', 'sc.id')
    .where('sc.id', id)
    .select('sc.id', 'sc.scheme_name', 'st.step_number', 'st.instructions')
}

function add(schemeData) {
  return db('schemes')
    .insert(schemeData)
    .then(([id]) => {
      return db('schemes').where('id', id).first();
    });
}

function addStep(stepData, id) {
  const stepId = id
  return db('schemes')
    .where('id', id)
    .update(stepData)
    .then(() => {
      return db('schemes').where('id', stepId).first()
    })
}

function update(changes, id) {
  const schemeId = id
  return db('schemes')
    .where('id', id)
    .update(changes)
    .then(() => {
      return db('schemes').where('id', schemeId).first()
    })
}

function remove(id) {
  return db('schemes')
    .where('id', id)
    .del()
    .then(() => {
      return db('schemes')
    })
}
