module Api
  module V1
    class TodosController < ApplicationController

      def index
        todos = Todo.all
        render json: {status: 'success', todos: todos}
      end
    end
  end
end
