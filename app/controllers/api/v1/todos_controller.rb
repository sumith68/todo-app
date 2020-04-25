module Api
  module V1
    class TodosController < ApplicationController
      skip_before_action :verify_authenticity_token

      def index
        todos = Todo.all
        render json: {status: 'success', todos: todos}
      end

      def create
        todo = Todo.new(todo_params)
        if todo.save
          render json: {status: 'success', todo: todo}
        else
          render json: {status: error}
        end
      end


      private

      def todo_params
        params.require(:todo).permit(:text, :completed)
      end
    end
  end
end
