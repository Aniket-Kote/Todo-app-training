package com.askncapture.todo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "todo_data")
public class ToDo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long todo_id;

	@Column(name = "todo_title")
	private String todo_title;

	
	@Column(name = "todo_desc")
	private String todo_desc;

	@Column(name = "todo_done")
	private int todone;

	public ToDo() {

	}

	public ToDo(long todo_id, String todo_title, String todo_desc, int todone) {
		super();
		this.todo_id = todo_id;
		this.todo_title = todo_title;
		this.todo_desc = todo_desc;
		this.todone = todone;
	}

	public long getTodo_id() {
		return todo_id;
	}

	public void setTodo_id(long todo_id) {
		this.todo_id = todo_id;
	}

	public String getTodo_title() {
		return todo_title;
	}

	public void setTodo_title(String todo_title) {
		this.todo_title = todo_title;
	}

	public String getTodo_desc() {
		return todo_desc;
	}

	public void setTodo_desc(String todo_desc) {
		this.todo_desc = todo_desc;
	}

	public int getTodo_done() {
		return todone;
	}

	public void setTodo_done(int todone) {
		this.todone = todone;
	}

	
	

}
