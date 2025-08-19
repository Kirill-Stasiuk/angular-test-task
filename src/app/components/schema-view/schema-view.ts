import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ApiService } from '../../services/api';
import { Schema, SchemaElements } from '../../interfaces/schema';

@Component({
  selector: 'app-schema-view',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputTextModule],
  templateUrl: './schema-view.html',
  styleUrl: './schema-view.scss'
})
export class SchemaView implements OnInit {
  schema: Schema | null = null;
  form: FormGroup;

  constructor(private api: ApiService, private fb: FormBuilder) {
    this.form = this.fb.group({});
  }

  ngOnInit(): void {
    this.api.getSchema().subscribe(data => {
      this.schema = data;
      this.buildForm();
    });
  }

  buildForm(): void {
    if (!this.schema?.elements) return;

    this.schema.elements.forEach((el: SchemaElements) => {
      this.form.addControl(el.name, this.fb.control(''));
    });
  }

  restrictInput(event: KeyboardEvent, type: string) {
    if (type === 'number' && /[a-zA-Z]/.test(event.key)) {
      event.preventDefault();
    }
  }
}