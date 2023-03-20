import tools from '../lib/dump-data/toolsData'

export const resolvers =   {
  Query: {
    getId: (parent: unknown, args: {}, context: IContext, info: {}) => {
      return context.id;
    },
    getTools: async (parent: unknown, args: {}, context: IContext, info: {}) => {
        return tools;;
    },
    getTool: async (parent: unknown, args: {id: string | number}, context: IContext, info: {}) => {
        if(typeof args.id === 'string') {
            args.id = Number(args.id);
        }
        return tools.find(tool => tool.id === args.id);
    }
  },
  Mutation:{
    addTool: async (parent: unknown, args: {name: string, link: string, description: string, image: string}, context: IContext, info: {}) : Promise<Tool> => {
        const newTool = {
            id: tools.length + 1,
            name: args.name,
            description: args.description,
            link: args.link,
            image: args.image
        }
        tools.push(newTool);
        return newTool;
    },
    deleteTool: async (parent: unknown, args: {id: string | number}, context: IContext, info: {}) => {
        if(typeof args.id ==='string') {
            args.id = Number(args.id);
        }
        return tools.splice(args.id, 1);
  
  }
}

}

export default resolvers
