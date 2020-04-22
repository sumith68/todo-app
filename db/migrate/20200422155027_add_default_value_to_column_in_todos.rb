class AddDefaultValueToColumnInTodos < ActiveRecord::Migration[6.0]
  def change
    change_column :todos, :completed, :boolean, default: false
  end
end
