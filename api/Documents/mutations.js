import sanitizeHtml from 'sanitize-html';
import Documents from './Documents';

export default {
  addDocument: async (root, args, context) => {
    if (!context.user) throw new Error('Sorry, you must be logged in to add a new document.');

    const date = new Date().toISOString();
    const documentId = Documents.insert({
      isPublic: args.isPublic || false,
      title: args.title || `Untitled Document #${Documents.find({ owner: context.user._id }).count() + 1}`,
      body: args.body ? sanitizeHtml(args.body) : 'This is my document. There are many like it, but this one is mine.',
      cover: args.cover,
      owner: context.user._id,
      createdAt: date,
      updatedAt: date
    });
    const doc = Documents.findOne(documentId);
    return doc;
  },
  updateDocument: async (root, args, context) => {
    if (!context.user) throw new Error('Sorry, you must be logged in to update a document.');
    if (!Documents.findOne({ _id: args._id, owner: context.user._id }))
      throw new Error('Sorry, you need to be the owner of this document to update it.');
    Documents.update(
      { _id: args._id },
      {
        $set: {
          ...args,
          body: sanitizeHtml(args.body),
          updatedAt: new Date().toISOString()
        }
      }
    );
    const doc = Documents.findOne(args._id);
    return doc;
  },
  removeDocument: async (root, args, context) => {
    if (!context.user) throw new Error('Sorry, you must be logged in to remove a document.');
    if (!Documents.findOne({ _id: args._id, owner: context.user._id }))
      throw new Error('Sorry, you need to be the owner of this document to remove it.');
    Documents.remove(args);
    return args;
  }
};
