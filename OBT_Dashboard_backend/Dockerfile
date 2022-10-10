FROM python:3.8.8

WORKDIR /backend_code

RUN pip install poetry

COPY pyproject.toml /backend_code/
COPY poetry.lock /backend_code/

RUN poetry install