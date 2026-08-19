export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  __InternalSupabase: {
    PostgrestVersion: '14.15';
  };
  public: {
    Tables: {
      action_items: {
        Row: {
          category: string;
          created_at: string;
          due_date: string | null;
          id: string;
          priority: string;
          sort_order: number;
          status: string;
          title: string;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          category?: string;
          created_at?: string;
          due_date?: string | null;
          id?: string;
          priority?: string;
          sort_order?: number;
          status?: string;
          title: string;
          updated_at?: string;
          user_id: string;
        };
        Update: {
          category?: string;
          due_date?: string | null;
          priority?: string;
          sort_order?: number;
          status?: string;
          title?: string;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [];
      };
      assessment_results: {
        Row: {
          assessment_slug: string;
          assessment_title: string;
          completed_at: string;
          created_at: string;
          id: string;
          result_payload: Json;
          score_label: string;
          scores: Json;
          summary: string;
          user_id: string;
        };
        Insert: {
          assessment_slug: string;
          assessment_title: string;
          completed_at?: string;
          created_at?: string;
          id?: string;
          result_payload?: Json;
          score_label?: string;
          scores?: Json;
          summary?: string;
          user_id: string;
        };
        Update: {
          assessment_slug?: string;
          assessment_title?: string;
          completed_at?: string;
          result_payload?: Json;
          score_label?: string;
          scores?: Json;
          summary?: string;
          user_id?: string;
        };
        Relationships: [];
      };
      career_paths: {
        Row: {
          created_at: string;
          fit_score: number | null;
          id: string;
          next_step: string;
          reasons: Json;
          sort_order: number;
          status: string;
          title: string;
          tradeoffs: Json;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          fit_score?: number | null;
          id?: string;
          next_step?: string;
          reasons?: Json;
          sort_order?: number;
          status?: string;
          title: string;
          tradeoffs?: Json;
          updated_at?: string;
          user_id: string;
        };
        Update: {
          fit_score?: number | null;
          next_step?: string;
          reasons?: Json;
          sort_order?: number;
          status?: string;
          title?: string;
          tradeoffs?: Json;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [];
      };
      profiles: {
        Row: {
          avatar_seed: string;
          city: string;
          created_at: string;
          full_name: string;
          id: string;
          onboarding_completed: boolean;
          stage: string;
          target_outcome: string;
          updated_at: string;
        };
        Insert: {
          avatar_seed?: string;
          city?: string;
          created_at?: string;
          full_name?: string;
          id: string;
          onboarding_completed?: boolean;
          stage?: string;
          target_outcome?: string;
          updated_at?: string;
        };
        Update: {
          avatar_seed?: string;
          city?: string;
          full_name?: string;
          onboarding_completed?: boolean;
          stage?: string;
          target_outcome?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      saved_resources: {
        Row: {
          category: string;
          created_at: string;
          id: string;
          path: string;
          title: string;
          user_id: string;
        };
        Insert: {
          category?: string;
          created_at?: string;
          id?: string;
          path: string;
          title: string;
          user_id: string;
        };
        Update: {
          category?: string;
          path?: string;
          title?: string;
          user_id?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};

export type Tables<TableName extends keyof Database['public']['Tables']> =
  Database['public']['Tables'][TableName]['Row'];
