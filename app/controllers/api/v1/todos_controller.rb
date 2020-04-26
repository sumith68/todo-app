module Api
  module V1
    class TodosController < ApplicationController
      skip_before_action :verify_authenticity_token
      before_action :set_todo, only: [:destroy]

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

      def destroy
        result =
        if @todo.delete
          { status: 'success', result: 'Successfully deleted' }
        else
          { status: 'error', description: 'Error in setting deletion' }
        end
        render json: result
      end


      private

      def set_todo
        @todo = Todo.find(params[:id])
      end

      def todo_params
        params.require(:todo).permit(:text, :completed)
      end
    end
  end
end
