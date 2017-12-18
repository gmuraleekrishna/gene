class PeopleController < ApplicationController
  before_action :set_person, only: [:show, :update, :destroy, :add_child, :add_spouse]
  attr_reader :children
  # GET /people
  def index
    @people = Person.all
  end

  # GET /people/1
  def show
  end

  # POST /people
  def create
    @person = Person.new(person_params)
    if @person.save
      render json: @person, status: :created, location: @person
    else
      render json: @person.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /people/1
  def update
    if @person.update(person_params)
      render json: @person
    else
      render json: @person.errors, status: :unprocessable_entity
    end
  end

  def add_child
    child = Person.new(person_params)
    @person.add_child child
  end

  def add_spouse
    spouse = Person.new(person_params)
    @person.add_spouse(spouse)
  end

  # DELETE /people/1
  def destroy
    @person.destroy
  end

  private

    def set_person
      @person = Person.find(params[:id])
    end

    def person_params
      params.require(:person).permit(:first_name, :last_name, :gender, :birth, :death, :mobile, :email, :landline)
    end
end
